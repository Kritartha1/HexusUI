import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/_services/auth.service';
import { SignupRequest } from 'src/app/models/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model:SignupRequest;
  constructor(private authService: AuthService,
    private cookieService: CookieService,
     private router: Router,
     private fb: FormBuilder,
     private toast:NgToastService
     ) {
   
   
   this.model={
     username: '',
     password: '',
     roles:["User"]
     
   };
 }

 onFormSubmit():void{
  this.authService.register(this.model)
  .subscribe({
    next: (response) => {
      

      console.log(this.model);
      console.log(response);
      this.toast.success({detail:"SUCCESS",summary:'Registered successfully!',duration:2000, position:'topCenter'});
     
      // this.authService.generateToken(response.id)
      // .subscribe({
        
      //   next:(res)=>{
      //     // this.clicked=false;
      //     console.log(res.mssg);
      //     this.router.navigateByUrl(`/hexus`);
          
      //     // this.router.navigateByUrl(`/validateEmail/${response.id}/${this.model.username}`);
      //   },

      //   error:(err)=>{
      //     // this.clicked=false;
      //     console.log(err,"err");
          
      //     this.toast.warning({detail:"Server error",summary:`${err.error}! Click on resend token`,duration:5000, position:'topCenter'});
     
      //     // this.router.navigateByUrl(`/validateEmail/${response.id}/${this.model.username}`);
        
            
      //   }
      // })

    }
    ,
    error:(err)=>{
      
      // this.clicked=false;
      if(err.status==0){
        this.toast.error({detail:"ERROR",summary:'Server error! Please try again later',duration:2000,position:'topCenter'});
      
      }else{
        this.toast.error({detail:"ERROR",summary:`${err.error}`,duration:2000,position:'topCenter'});
      
      }
       // alert("Oops!Try again");
      // this.clearForm();
        
    }
  });
    
 }
   
     
}
