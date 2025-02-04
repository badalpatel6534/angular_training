import { Component } from '@angular/core';
import { HttpService } from '../../common/services/http.service';
import { AuthService } from '../../auth/auth.service';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-interceptor-component',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule
  ],
  templateUrl: './interceptor-component.component.html',
  styleUrl: './interceptor-component.component.scss'
})
export class InterceptorComponentComponent {
  users: any[] = [];

  constructor(private httpService: HttpService, private authService: AuthService) {}

  ngOnInit() {}

  setToken() {
    this.authService.setToken('dynamic-token-12345');
    console.log('Token Set');
  }

  /** 🔥 Best Practice: RxJS 8 will remove old `.subscribe()` callback arguments.
     * Use an observer object instead for better readability and future compatibility.
  */  
  fetchUsers() {
    this.httpService.get<any[]>('users').subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching users', error);
      },
      complete: () => {
        console.log('User fetching completed.');
      }
    });
    }

}
