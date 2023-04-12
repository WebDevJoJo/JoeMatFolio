import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessComponent } from './access.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AccessComponent }];

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [AccessComponent],
})
export class AccessModule {}
