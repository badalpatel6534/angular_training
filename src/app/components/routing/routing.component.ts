import { Component, inject } from '@angular/core';
import {  MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {

  private router = inject(Router);

  gotoComArchitecture() {
    const navigationExtras = {
      state: {
        userDetails: {
          fName: 'badal',
          lName: 'patel',
          role:'super-admin'
        }
      },
    };
    this.router.navigateByUrl('/component-architecture', navigationExtras);

  }

  gotoComArchitectureWithId() {
    this.router.navigateByUrl('/component-architecture/1')
  }
}
