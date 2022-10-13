import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class AdminModule { }
