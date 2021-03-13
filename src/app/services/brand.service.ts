import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponceModel } from '../models/brandResponceModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44399/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponceModel>{
    return this.httpClient.get<BrandResponceModel>(this.apiUrl)
  }
}
