import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AuthService } from '../services/auth.service';
// import { AuthGuardService } from '../services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
 {
   path: '',
   component: LoginComponent
 }
];
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [RouterModule.forChild(routes),FormsModule,CommonModule,HttpClientModule],
  exports: [RouterModule,LoginComponent],
  //providers:[AuthService, AuthGuardService]
})
export class LoginModule { }
