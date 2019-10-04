import { Component } from '@angular/core';
import { User } from '../../shared/model/user.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }



  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/formulaire']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
 }
