import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import JSPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  dados: any;
  dadosBrutos:any;
  menorPMTA:any;
  img:any;
  constructor( public router: Router,  private file: File,
    private fileOpener: FileOpener, public loadingController: LoadingController) { 
    if (router.getCurrentNavigation().extras.state) {
      this.dados = this.router.getCurrentNavigation().extras.state;
      this.dadosBrutos = this.dados.dadosBrutos;

      this.menorPMTA =this.dados.pmtaCasco;
      
      if(this.menorPMTA >  this.dados.pmtaTampo1){
        this.menorPMTA =  this.dados.pmtaTampo1
      }
      if(this.menorPMTA >  this.dados.pmtaTampo2){
        this.menorPMTA =  this.dados.pmtaTampo2
      }
      
    }
  }

 async createPdf() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Gerando o PDF ...',
      duration: 2000
    });
    await loading.present();
    const pdfBlock = document.getElementById("print-wrapper");
    
    const options = { 
      background: "white", 
      height: 980, 
      width: 800
    };

    

    domtoimage.toPng(pdfBlock, options).then((fileUrl) => {
      
      var doc = new JSPDF("p","mm","a4");
      doc.addImage(fileUrl, 'PNG', 10, 10, 400, 250);
  
      let docRes = doc.output();
      let buffer = new ArrayBuffer(docRes.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < docRes.length; i++) {
          array[i] = docRes.charCodeAt(i);
      }
  
  
      const directory = this.file.dataDirectory;
      const fileName = "user-data.pdf";

      let options: IWriteOptions = { 
        replace: true 
      };
  
      this.file.checkFile(directory, fileName).then((res)=> {
        this.file.writeFile(directory, fileName,buffer, options)
        .then((res)=> {
          console.log("File generated" + JSON.stringify(res));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() =>loading.dismiss())
            .catch(e => loading.dismiss());
        }).catch((error)=> {
          console.log(JSON.stringify(error));
        });
      }).catch((error)=> {
        this.file.writeFile(directory,fileName,buffer).then((res)=> {
          console.log("File generated" + JSON.stringify(res));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => loading.dismiss())
            .catch(e => loading.dismiss());
        })
        .catch((error)=> {
          console.log(JSON.stringify(error));
          loading.dismiss();
        });
      });
    }).catch(function (error) {
      loading.dismiss();
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
