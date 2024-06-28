import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product-interface';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public users: User[] = [];
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor(
    public http: HttpClient
  ) {}

  getProducts(): Observable<Array<Product>> {
    const url = environment.baseURL + '/products?limit=6'
    return this.http.get<Array<Product>>(url);
  }

  getProductsById(productId: string): Observable<Array<Product>> {
    const url = environment.baseURL + `/products/${productId}`;
    return this.http.get<Array<Product>>(url);
  }



  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  private updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  
  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
    this.updateLocalStorage();
    this.usersSubject.next(this.users);
  }

  updateUser(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.updateLocalStorage();
      this.usersSubject.next(this.users);
    }
  }


  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
    this.updateLocalStorage();
    this.usersSubject.next(this.users);
  }



}
