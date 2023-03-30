import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/login/login.module').then((V) => V.LoginModule),
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
  ],
})
export class LoginModule {}
