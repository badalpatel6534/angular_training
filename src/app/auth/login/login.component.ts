import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  constructor() {}

  redirectToDashboard() {
    const user = {
      userName: 'badal',
      password: 'patel'
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.authService.setLogin(true);
    this.router.navigateByUrl('/dashboard');
  }
}
