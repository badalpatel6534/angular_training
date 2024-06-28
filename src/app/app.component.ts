import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthService } from './auth/auth.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  // public authService = inject(AuthService);
  title = 'm3-angular';
  authSubscription: Subscription;
  routeSubscription: Subscription;
  isLoggedIn = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {

    const user = localStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    if (parsedUser) {
      this.authService.setLogin(true);
    } else {
      this.authService.setLogin(false);
    }

    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          // window.scrollTo(0, 0);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // this.viewportScroller.scrollToPosition([0, 0]);
        }, 500);
      }
    });
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.isLogin$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    });

  }

  onActivate(e: any, outlet: any){
    outlet.scrollTop = 0;
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
