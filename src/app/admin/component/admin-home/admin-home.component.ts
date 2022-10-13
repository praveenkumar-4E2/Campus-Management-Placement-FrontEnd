import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver, LayoutModule} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  {


  title = 'angular-responsive-sidebar';
  @ViewChild(MatSidenav)
 sidenav!: MatSidenav;



  constructor(private observer: BreakpointObserver) {}
  
  

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    
  }
  
  }





