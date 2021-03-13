import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponceModel } from '../models/userResponceModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44399/api/users/getall"

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<UserResponceModel>{
    return this.httpClient.get<UserResponceModel>(this.apiUrl)
  }
}
