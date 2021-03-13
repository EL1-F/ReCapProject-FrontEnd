import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponceModel } from '../models/carResponceModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44399/api/cars/getbydetail"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponceModel>{
    return this.httpClient.get<CarResponceModel>(this.apiUrl)
  }
}
