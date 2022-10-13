import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/component/admin-home/admin-home.component';
import { BranchPlacementsComponent } from './shared/component/branch-placements/branch-placements.component';
import { HomePageComponent } from './shared/component/home-page/home-page.component';
const routes: Routes = [
  {path:'admin',component:AdminHomeComponent},
  {path:'department',component:HomePageComponent},
  {path:'chart',component : BranchPlacementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
