import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.page.html',
  styleUrls: ['./confirme.page.scss'],
})
export class ConfirmePage implements OnInit {

  diamentro: any;
  dados: any = {
    tag: "",
    diametro: 0,
    tensao: "",
    solda: 0,
    espmincasco: 0,
    espmintampo1: 0,
    espmintampo2: 0,
    espTampo2:0,
    material: "",
    tipoSolda: ""
  };
  constructor(private navCtrl : NavController, public router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      const pageName = this.router.getCurrentNavigation().extras.state;
      this.dados.tag = pageName.tag;
      this.dados.diametro = pageName.diametro;
      this.dados.espmincasco = pageName.espmincasco;
      this.dados.espmintampo1 = pageName.espmintampo1;
      this.dados.espmintampo2 = pageName.espmintampo2;

      switch(pageName.material) { 
        case "108.0": { 
          this.dados.material = "A-285-C";
           break; 
        } 
        case "117.8": { 
          //statements; 
          this.dados.material = "A-515-60";
          break; 
        } 
        case "137.7": { 
          //statements; 
          this.dados.material = "A-517-70";
          break; 
        } 
        case "118.0": { 
          this.dados.material = "A-387-11 cl 1";
          //statements; 
          break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
     } 
      switch(pageName.solda) { 
        case "1.00": { 
          this.dados.tipoSolda = "Solda de topo feita de ambos os lados com radiografia total";
           break; 
        } 
        case "0.85": { 
          //statements; 
          this.dados.tipoSolda = "Solda de topo feita de ambos os lados com radiografia parcial";
          break; 
        } 
        case "0.7": { 
          //statements; 
          this.dados.tipoSolda = "Solda de topo feita de ambos os lados não radiografada";
          break; 
        }       
        default: { 
           //statements; 
           break; 
        } 
     } 
  
      this.dados.solda = pageName.solda; 
      this.dados.tensao = pageName.material;
      console.log( this.dados);
     // console.log(pageName);
    }
  }

  ngOnInit() {
  }

  showPageCalculo(){
    this.navCtrl.navigateForward('calculo');
  }
}
