import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogin$: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor() { }


  setLogin(isLogin: boolean) {
    console.log("isLoginSubject", this.isLoginSubject.getValue());
    this.isLoginSubject.next(isLogin);
  }
}
