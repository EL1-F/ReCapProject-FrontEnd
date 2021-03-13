import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponceModel } from '../models/rentalResponceModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl= "https://localhost:44399/api/rentals/getdetail"

  constructor(private httpClient:HttpClient) { }

  getRent():Observable<RentalResponceModel>{
    return this.httpClient.get<RentalResponceModel>(this.apiUrl)
  }
}
