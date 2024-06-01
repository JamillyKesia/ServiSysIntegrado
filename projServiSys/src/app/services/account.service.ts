import { User } from 'src/app/models/identity/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //var que recebe atualizações de token quando o user logar
  private currentUserSource = new ReplaySubject<User | any>(1);
  public currentUser$ = this.currentUserSource.asObservable();


  baseURL = environment.apiURL + 'api/Account/';
  constructor(private http: HttpClient) { 
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUserSource.next(JSON.parse(storedUser));
    } else {
      this.currentUserSource.next(null);
    }
  }

  public login(model: any): Observable<void>{
    return this.http.post<User>(this.baseURL + 'login', model).pipe(
      take(1),
      map((response: User) => {
      const user = response;
        if (user){
          this.setCurrentUser(user);
        }
      })
    );
  }

  public register(model: any): Observable<void>{
    return this.http.post<User>(this.baseURL + 'RegisterUser', model).pipe(
      take(1),
      map((response: User) => {
      const user = response;
        if (user){
          this.setCurrentUser(user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.currentUserSource.complete();
  }

  public setCurrentUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }


}
