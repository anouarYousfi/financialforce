import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { Observable } from 'rxjs';
import { User } from '../../shared/model/user.model';
import { FournisseurModel } from '../../shared/model/fournisseur.model';
import { FournisseursService } from '../../shared/services/fournisseurs.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public users: Observable<User[]>;
  public providers : Observable<FournisseurModel>;
  public usersArray : string[];

  constructor(public fournisseursservice: FournisseursService, public router: Router , public accountService : AccountService) {
    this.accountService=accountService;
    this.fournisseursservice=fournisseursservice;
  }

  ngOnInit() {
    this.accountService.getAll().subscribe((response)=>{this.users=response;});
     this.fournisseursservice.getProviders().subscribe(resp=>this.providers=resp)
  }
}

