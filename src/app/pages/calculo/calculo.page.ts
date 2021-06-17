import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
})
export class CalculoPage implements OnInit {

  dados: any;
  constructor( public router: Router) { 
    if (router.getCurrentNavigation().extras.state) {
      this.dados = this.router.getCurrentNavigation().extras.state;
      console.log(this.dados);
    }
  }

  ngOnInit() {
  }

}
