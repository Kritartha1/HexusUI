import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { DummynavComponent } from './features/misc/dummynav/dummynav.component';
import { HomeComponent } from './core/home/home.component';
import { DummyComponent } from './features/dummy/dummy.component';
import { HexusPageComponent } from './features/hexus-page/hexus-page.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:HomeComponent
  },{
    path:'hexus',
    component:HexusPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
