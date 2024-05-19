import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Account
  private getUser = `${environment.api}/api/Account/GetUser`;
  private registerUser = `${environment.api}/api/Account/RegisterUser`;
  private loginUser = `${environment.api}/api/Account/Login`;
  private updateUser = `${environment.api}/api/Account/UpdateUser`;

  //tokenHeader = new HttpHeaders({'Authorization': token})  

  constructor(private httpClient: HttpClient) { }

  obterUser(){
    return this.httpClient.get<User[]>(this.getUser);
  }

  cadastrarUser(users: User){
    return this.httpClient.post<User>(this.registerUser,users);
  }

  logarUser(users: User){
    return this.httpClient.post<User>(this.loginUser,users);
  }

  atualizarUser(users: User){
    return this.httpClient.put<User>(this.updateUser,users);
  }


}
