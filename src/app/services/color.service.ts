import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponceModel } from '../models/colorResponceModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44399/api/colors/getall"

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ColorResponceModel>{
    return this.httpClient.get<ColorResponceModel>(this.apiUrl)
  }
}
