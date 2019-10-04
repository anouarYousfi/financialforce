import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FournisseurModel } from '../../shared/model/fournisseur.model';
import { FournisseursService } from '../../shared/services/fournisseurs.service';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

 
  public providers : Observable<FournisseurModel>;

  constructor(public fournisseursservice: FournisseursService, public router: Router ) {
    this.fournisseursservice=fournisseursservice;

  }

  ngOnInit() {
     this.fournisseursservice.getProviders().subscribe(re=>this.providers=re)
  }
}