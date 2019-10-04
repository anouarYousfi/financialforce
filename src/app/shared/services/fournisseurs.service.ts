import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { AppComponent } from '../../app.component';
import { FournisseurModel } from '../model/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  
 constructor(public http: Http) { }

 getProviders(){
   return this.http.get(AppComponent.API_URL+'/account/selectedSocieties')
     .map(resp=>resp.json());
 }
 postSelectedProviders ( providers : FournisseurModel[]){
  // providers.forEach(() => {
  // })

  for(let i in providers)
return this.http.post(AppComponent.API_URL+'/account/postSelectedProviders',i);

 }
  
}
