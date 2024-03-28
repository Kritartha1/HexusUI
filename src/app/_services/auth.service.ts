import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { environment } from 'src/environments/environment';
import { TokenResponse } from '../models/token-response';
import { AuthUser } from '../models/AuthUser';
import { SignupRequest } from '../models/register-request';
import { SignupResponse } from '../models/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  $user = new BehaviorSubject<AuthUser | undefined>(undefined);

  constructor(private http: HttpClient, private cookieService: CookieService) {

   }

   

   login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/Auth/Login`, {
      username: request.email,
      password: request.password
    });
  }

  register(request:SignupRequest):Observable<SignupResponse>{
    return this.http.post<SignupResponse>(`${environment.apiBaseUrl}/api/Auth/Register`, {
      username: request.username,
      password: request.password,
      roles:request.roles
    });
  }

  getUserById(id: string): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${environment.apiBaseUrl}/api/Auth/${id}`)
  }

  generateToken(id:string):Observable<TokenResponse>{
    //return this.http.get<string>(`${environment.apiBaseUrl}/api/Auth/Token/${id}`,);
    return this.http.get<TokenResponse>(`${environment.apiBaseUrl}/api/Auth/Token/${id}`
    );
  }

  // checkConfirmEmail(id:string):Observable<EmailValidationResponse>{
  //   return this.http.get<EmailValidationResponse>(`${environment.apiBaseUrl}/api/Auth/CheckConfirmEmail/${id}`
  //   );
  // }

  // confirmEmail(token:string,email:string):Observable<EmailValidationResponse>{
  //   return this.http.post<EmailValidationResponse>(`${environment.apiBaseUrl}/api/Auth/ConfirmEmail`,{token:token,email:email }
  //   );
  // }
  
  // generatePasswordToken(email:string):Observable<EmailValidationResponse>{
  //   return this.http.get<EmailValidationResponse>(`${environment.apiBaseUrl}/api/Auth/PasswordReset/${email}`);
  // }

  // changePassword(request:PasswordChangeRequest):Observable<EmailValidationResponse>{
  //   return this.http.post<EmailValidationResponse>(`${environment.apiBaseUrl}/api/Auth/change-password`,{
  //     passsword:request.password,
  //     confirmPassword:request.confirmPassword,
  //     email:request.email,
  //     token:request.token
  //   });
  // }
  
  setuser(user: AuthUser): void {
    this.$user.next(user);
    localStorage.setItem('user-email', user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
    localStorage.setItem('user-Id', user.id);

    sessionStorage.setItem('user-email', user.email);
    sessionStorage.setItem('user-roles', user.roles.join(','));
    sessionStorage.setItem('user-Id', user.id);
  }

  user(): Observable<AuthUser | undefined> {
    return this.$user.asObservable();
  }

  getuser(): AuthUser | undefined {
    // const email = localStorage.getItem('user-email');
    // const roles = localStorage.getItem('user-roles');
    // const id = localStorage.getItem('user-Id');

    const email = sessionStorage.getItem('user-email');
    const roles = sessionStorage.getItem('user-roles');
    const id = sessionStorage.getItem('user-Id');

    if (email && roles && id) {
      const user: AuthUser= {
        email: email,
        roles: roles.split(','),
        id: id
      };

      return user;
    }
    return undefined;
  }

  logout(): void {
    localStorage.clear();

    this.cookieService.delete('Authorization', '/');
    this.$user.next(undefined);

  }
}

