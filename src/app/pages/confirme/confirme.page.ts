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

  constructor(private navCtrl : NavController) {}

  ngOnInit() {
  }

  showPageCalculo(){
    this.navCtrl.navigateForward('calculo');
  }
}
