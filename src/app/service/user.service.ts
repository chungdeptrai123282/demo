import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shared/model/User';
import { IUserLogin } from '../shared/interface/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObervable: Observable<User>;
  constructor(private http: HttpClient,private toastrService:ToastrService) {
    this.userObervable = this.userSubject.asObservable();
  }
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next:(user)=>{
          this.userSubject.next(user);
          this.toastrService.success(`Welcome to Foodmine ${user.name}!`,'Login Successful');
        },
        error: (errorReponse)=>{
          this.toastrService.error(errorReponse.error,'Login Failed');
        }
      })
    );
  }
}
