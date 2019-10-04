import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { AccountService } from '../../shared/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
    }

     ngOnInit() {
    }

  register() {
    this.accountService.createAccount(this.user).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
