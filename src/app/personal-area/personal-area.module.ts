import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreventiveComponent } from './preventive/preventive.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'preventive', component: PreventiveComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  declarations: [WelcomeComponent, PreventiveComponent, PaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PersonalAreaModule {}
