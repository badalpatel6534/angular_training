import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import {  AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [
    CommonModule,
    LottieComponent,
    RouterModule
  ],
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss'
})
export class AccessDeniedComponent {
  options: AnimationOptions = {
    path: '/assets/Animation_-_1719514776450_1_2.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(0.8); 
    console.log(animationItem);
  }
}
