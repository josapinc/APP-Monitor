import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UsuarioService } from "../../providers/usuario/usuario";
import { PrincipalProvider } from "../../providers/principal/principal";
import {PrincipalPage} from "../../pages/principal/principal";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string ="";
  contrasena:string="";


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,
    private _us:UsuarioService) {
  }

  ingresar(){

   this._us.ingresar(this.usuario, this.contrasena)

          .subscribe(()=>{});
            console.log(this.usuario);
            console.log(this.contrasena);
            if(this.usuario=="admin1" && this.contrasena=="1234567"){
              this.navegarPagina();


            }
            else if(this.usuario=="admin2" && this.contrasena=="1234567"){
                this.navegarPagina();

            }





  }

  navegarPagina( ) {
    this.navCtrl.push(PrincipalPage);
  }


}
