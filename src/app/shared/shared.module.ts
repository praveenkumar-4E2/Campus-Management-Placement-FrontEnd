import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { BranchPlacementsComponent } from './component/branch-placements/branch-placements.component';
import { NgChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    HomePageComponent,
    BranchPlacementsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgChartsModule,
  ]
})
export class SharedModule { }
