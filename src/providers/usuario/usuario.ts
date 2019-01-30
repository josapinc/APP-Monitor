import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController,NavController} from 'ionic-angular';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { Http, URLSearchParams} from '@angular/http';
import {PrincipalPage} from "../../pages/principal/principal";
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioService {

  token:string;
  id_usuario:string;

  constructor(public http: HttpClient,
  private alertCtrl: AlertController) {
    console.log('Hello UsuarioProvider Provider');
  }

  ingresar(nom_user:string, password:string){



  // let data = new URLSearchParams ();
    //let data = new FormData();
//    data.append("nom_user",nom_user);
//    data.append("password",password);
    let body = {nom_user:nom_user,
                password:password};
    const url = URL_SERVICIOS + '/login';
  //  console.log(data.append);


    return this.http.post( url, body )
                     .map( resp=>
                        {

                  console.log( resp );

                    if( resp["error"] ){
                      this.alertCtrl.create({
                        title: 'Error al iniciar',
                        subTitle: resp["mensaje"],
                        buttons: ["Regresar"]
                      }).present();
                    }else{

                      this.alertCtrl.create({
                        title: 'Bienvenido',
                        buttons: ["OK"]
                      }).present();

                      this.token = resp['token'];
                      this.id_usuario = resp['id_usuario'];


                    }

                    return resp;

                  });
                    }


}
