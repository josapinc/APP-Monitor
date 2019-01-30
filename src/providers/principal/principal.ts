import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { AlertController,NavController} from 'ionic-angular';
import { Http, URLSearchParams} from '@angular/http';
import {map} from 'rxjs/operators';


/*
  Generated class for the PrincipalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrincipalProvider {

  humedad:any[] = [];
  temperatura:any[]=[];

  constructor(public http: Http) {
    console.log('Hello PrincipalProvider Provider');
      this.mostrar_datos();
  }




  mostrar_datos(){

    let url = URL_SERVICIOS + "/principal";
     this.http.get(url)
              .pipe(map(resp=>resp.json()))
              .subscribe(( data:any) => {

                console.log(data);


                this.temperatura.push( ...data.temperatura);
                console.log('temperatura');


            });


    }

}
