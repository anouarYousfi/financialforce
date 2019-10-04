import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppComponent} from "../../app.component";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Devis } from '../model/devis.model';


@Injectable()
export class AccountService {

  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }

  createDevis(devis:Devis){
    return this.http.post(AppComponent.API_URL+'/saveDevis',devis)
    .map(resp=>resp.json());
  }
  
  getAll(){
    return this.http
      .get(AppComponent.API_URL+'/account/allUsers')
      .map(res=>res.json());
  }

}
 
