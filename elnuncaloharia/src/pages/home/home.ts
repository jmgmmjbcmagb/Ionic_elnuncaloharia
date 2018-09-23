import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelefonoWhatsappPipe } from "../../pipes/telefono-whatsapp/telefono-whatsapp";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
telefono: string = "Telefono";
telefono2: string = "Telefono";;
setFinalPhone = new TelefonoWhatsappPipe();
  constructor(public navCtrl: NavController) {
  
  }
  telefonoEs(){
    this.telefono2 = this.setFinalPhone.transform(this.telefono);
    console.log(this.telefono2);
  }
}
