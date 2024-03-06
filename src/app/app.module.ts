import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DummyComponent } from './features/dummy/dummy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/auth/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { RegisterComponent } from './features/auth/register/register.component';
import { DummynavComponent } from './features/misc/dummynav/dummynav.component';
import { HomeComponent } from './core/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    LoginComponent,
    RegisterComponent,
    DummynavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
