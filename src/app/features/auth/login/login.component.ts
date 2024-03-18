import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/_services/auth.service';
import { PresenceService } from 'src/app/_services/presence.service';
import { User } from 'src/app/models/User';
import { LoginRequest } from 'src/app/models/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('form', { static: true }) form!: NgForm; 

    model: LoginRequest;
    showEmailErr:boolean=false;
    showPassErr:boolean=false;
    login_success:string='Logged in successfully!';
    passwordInputType: string = 'password';
    clicked:boolean=false;

    constructor(private authService: AuthService, 
      private cookieService: CookieService,
       private router: Router,
       private toast:NgToastService,
       private presenceService:PresenceService
       ) {
      this.model = {
        email: '',
        password: ''
      };

     
    }

    togglePasswordVisibility():void {
      this.passwordInputType = (this.passwordInputType === 'password') ? 'text' : 'password';
    }



    onFormSubmit(): void {
      
      this.clicked=true;

      if(this.model.email===''&&this.model.password===''){
        this.clicked = false;
        
        this.toast.warning({detail:"ERROR",summary:'Please fill all the details!',duration:2000,position:'topRight'});
        return;
      }else if (this.model.email==='') {
        this.clicked = false;
        this.toast.warning({detail:"ERROR",summary:'Email can not be empty!',duration:2000,position:'topCenter'});
        
        return;
      } else if (this.model.password==='') {
        this.clicked = false;
        this.toast.warning({detail:"ERROR",summary:'Password can not be empty',duration:2000,position:'topCenter'});
        
        return;
      }

      // if(this.form.invalid){
      //   alert("Please fill all the fields");
      //   return;
      // }

      this.authService.login(this.model)
        .subscribe({
          next: (response) => {
  
            // const tokenExpirationTime = 1 * 60 * 1000; // 15 minutes in milliseconds
            // const expirationDate = new Date().getTime() + tokenExpirationTime;
            //Set auth cookie
            // console.log(response);
            this.cookieService.set('Authorization', `Bearer ${response.jwtToken}`, undefined, '/', undefined, true, 'Strict');
            //this.cookieService.set('Authorization', `Bearer ${response.jwtToken}`, expirationDate, '/', undefined, true, 'Strict');
  
            //set user
            this.authService.setuser({
              email: response.email,
              roles: response.roles,
              id: response.id
            })

            this.toast.success({detail:"SUCCESS",summary:'Logged in successfully!',duration:3000, position:'topCenter'});

            // console.log(response);
            this.clicked=false;
            var user:User={

              username:this.model.email,
              token:this.cookieService.get('Authorization')
            }
            console.log(user);

            this.presenceService.createHubConnection(user);

            this.router.navigateByUrl('/hexus');
          }
          ,
          error:(err)=>{
            this.clicked=false;
            console.log(err.error);
            this.toast.error({detail:"Log in failed",summary:`${err.error}Oops!Please try again`,duration:2000,position:'topCenter'});
            // console.error(err);
          }
        });
        
    }

}
