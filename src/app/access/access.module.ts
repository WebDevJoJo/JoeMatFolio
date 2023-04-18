import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccessComponent } from './access.component';

const routes: Routes = [{ path: 'access', component: AccessComponent }];

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [AccessComponent],
})
export class AccessModule {}
