import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { AccessComponent } from './access/access.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PreventiveComponent } from './preventive/preventive.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: AccessComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'preventive', component: PreventiveComponent },
  { path: 'paymet', component: PaymentComponent },
];

@NgModule({
  declarations: [AccessComponent, WelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [FormsModule],
})
export class PersonalAreaModule {}
