import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { department } from '../../department';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  department!: department[] ;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {

    this.apiservice.get().subscribe((data: department[])=>{

      console.log(data);
      this.department=data;
      }
      )
   }
  
    

}
