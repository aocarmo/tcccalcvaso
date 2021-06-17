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
  pmtaCasco: any;
  pmtaTampo1: any;
  pmtaTampo2: any;
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
          this.dados.tipoSolda = "Radiografia total";
           break; 
        } 
        case "0.85": { 
          //statements; 
          this.dados.tipoSolda = "Radiografia parcial";
          break; 
        } 
        case "0.7": { 
          //statements; 
          this.dados.tipoSolda = "Não radiografada";
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

  calcular(){
    this.pmtaCasco = this.calcularCasco();
    this.pmtaTampo1 = this.calcularTampo1();
    this.pmtaTampo2 = this.calcularTampo2();   
    let dadosCalculados = {
      pmtaCasco: this.pmtaCasco,
      pmtaTampo1: this.pmtaTampo1,
      pmtaTampo2: this.pmtaTampo2
    }
    this.navCtrl.navigateForward('calculo');
    this.navCtrl.navigateForward('calculo',  { state: dadosCalculados });    
  }

  calcularCasco(){
    let S = parseFloat(this.dados.tensao);
    let E = parseFloat(this.dados.solda);
    let e = parseFloat( this.dados.espmincasco);
    let r = parseFloat(this.dados.diametro) / 2;
    
 
    //Parte de cima da fração (SEe)
    let parteCima = S * E * e;
    //Parte de baixo da fração (R + 0.6*e)
    let parteBaixo = r + (0.6 * e);

    let resultado = parteCima / parteBaixo;
    return resultado.toFixed(2);  
  }
  calcularTampo1(){
    let S = parseFloat(this.dados.tensao);
    let E = parseFloat(this.dados.solda);
    let e = parseFloat( this.dados.espmintampo1);
    let r = parseFloat(this.dados.diametro) / 2;
    
 
    //Parte de cima da fração (SEe)
    let parteCima = S * E * e;
    //Parte de baixo da fração (R + 0.6*e)
    let parteBaixo = r + (0.1 * e);

    let resultado = parteCima / parteBaixo;
    return resultado.toFixed(2); 
  
  }

  calcularTampo2(){
    let S = parseFloat(this.dados.tensao);
    let E = parseFloat(this.dados.solda);
    let e = parseFloat( this.dados.espmintampo2);
    let r = parseFloat(this.dados.diametro) / 2;
    
 
    //Parte de cima da fração (SEe)
    let parteCima = S * E * e;
    //Parte de baixo da fração (R + 0.6*e)
    let parteBaixo = r + (0.1 * e);

    let resultado = parteCima / parteBaixo;
    return resultado.toFixed(2);  
  }
}
