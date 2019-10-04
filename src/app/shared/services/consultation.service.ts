import { Injectable } from '@angular/core';
import { ConsultationModel } from '../model/consultation.model';
import { Http } from '@angular/http';
import { AppComponent } from '../../app.component';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {


  public _consultation: ConsultationModel ;

  constructor(public http : Http){ }

  ngOnInit(): void {
  
  }

  set consultation(value: ConsultationModel) {
    this._consultation = value;
  }
  
  postConsultation(consultation : ConsultationModel){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  ''});
    let options = { headers: headers };

    return this.http.post(AppComponent.API_URL+'/account/consultation',consultation)
      .map(resp=>resp.json());
  }
 getConsultationId(){
 

    return this.http.get(AppComponent.API_URL+'/account/nextConsultation')
      .map(resp=>resp.json());
  }

  getConsultations(object: String){

    return this.http.get(AppComponent.API_URL+'/account/getByObject' + object)
      .map(resp=>resp.json());
  }

}
