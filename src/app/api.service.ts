import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { department } from './shared/department';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL="http://localhost:8080/department";
  constructor(private httpClient:HttpClient) { }
  public get():Observable<department[]> {
    return this.httpClient.get<department[]>(this.SERVER_URL);
  }

  saveProduct(data: any){
    return this.httpClient.post(this.SERVER_URL,data)
  }

}
