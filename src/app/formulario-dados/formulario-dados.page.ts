import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from "@angular/forms";
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-formulario-dados',
  templateUrl: './formulario-dados.page.html',
  styleUrls: ['./formulario-dados.page.scss'],
})
export class FormularioDadosPage implements OnInit {
  myForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder, private navCtrl: NavController , public alertController: AlertController) { 

 
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      tag: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      //email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      diametro: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(150)]],
      espmincasco: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      espmintampo1: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      espmintampo2: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      material: ['', [Validators.required]],
      solda: ['', [Validators.required]],
      /*dob: [],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]*/
    })

  
  }

  fetchDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.myForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorCtr() {
    return this.myForm.controls;
  }
  onSubmit() {

    let espessuraLimite = this.myForm.value.diametro / 20;

    if(this.myForm.value.espmincasco >= espessuraLimite){
      this.presentAlert("A espessura do casco deve ser 20 vezes menor que o diametro");      
      return false;
    }
    
    if(this.myForm.value.espmintampo1 >= espessuraLimite){
    
      this.presentAlert("A espessura do minima do tampo 1 deve ser 20 vezes menor que o diametro");
      return false;
    }

    if(this.myForm.value.espmintampo2 >= espessuraLimite){
      this.presentAlert("A espessura do minima do tampo 2 deve ser 20 vezes menor que o diametro");
      return false;
    }

    this.submitted = true;
    if (!this.myForm.valid) {
      this.presentAlert("Verifique as informações inseridas.");
      return false;
    } else {    
     
      this.navCtrl.navigateForward('confirme',  { state: this.myForm.value });        
      
    }
  }

  async presentAlert(texto) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção',
      subHeader: 'Dados de entrada inválidos',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
