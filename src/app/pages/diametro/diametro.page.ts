import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ConfirmePage } from '../confirme/confirme.page';

@Component({
  selector: 'app-diametro',
  templateUrl: './diametro.page.html',
  styleUrls: ['./diametro.page.scss'],
})
export class DiametroPage implements OnInit {

  diametro: string = "D";
  material: string = "M";
  eficiencia: string = "E";
  espcasco: string = "ec";
  esptampo1: string = "et1";
  esptampo2: string = "et2";
  tag: string = "tag";


  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {

    this.diametro = localStorage.getItem('diametro') || '';
    this.eficiencia = localStorage.getItem('eficiencia') || '';
    this.espcasco = localStorage.getItem('espcasco') || '';
    this.esptampo1 = localStorage.getItem('esptampo1') || '';
    this.esptampo2 = localStorage.getItem('esptampo2') || '';
    this.material = localStorage.getItem('material') || '';
    this.tag = localStorage.getItem('tag') || '';
  }


  salvarInformacoes() {

    localStorage.setItem('D', JSON.stringify(this.diametro));
    localStorage.setItem('E', JSON.stringify(this.eficiencia));
    localStorage.setItem('ec', JSON.stringify(this.espcasco));
    localStorage.setItem('et1', JSON.stringify(this.esptampo1));
    localStorage.setItem('et2', JSON.stringify(this.esptampo2));
    localStorage.setItem('M', JSON.stringify(this.material));
    localStorage.setItem('tag', JSON.stringify(this.tag));

  }

  async alert() {

    this.alertCtrl.create({});

    const alert = await this.alertCtrl.create({
      header: 'Considerações',
      message: '1.Vaso de pressão cilíndrico horizontal ; 2.Tampos elípticos ; 3.O vaso e ambos os tampos têm o mesmo material ; 4.Outros materiais podem ser utilizados na fabricação de cascos e tampos de vasos de pressão, mas para efeitos de simplificação, foram escolhidos apenas quatro como opções ; 5. A temperatura de projeto adotada é a temperatura ambiente (30°C) ; 6.Cálculo da PMTA pelo Código ASME, Seção VIII, Divisão 1 ; 7. Soldas de topo feita de ambos os lados.',
      buttons: ['Entendi']
    });

    alert.present();
  }

  showpageconfirme() {
    this.navCtrl.navigateForward('confirme');
  }



}
