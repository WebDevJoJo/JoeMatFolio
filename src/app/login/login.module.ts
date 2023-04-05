import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AccessComponent }];

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule, AccessComponent],
})
export class LoginModule {}
