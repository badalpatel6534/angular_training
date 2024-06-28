import { DebounceClickDirective } from './../../directives/debounce-click.directive';
import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { AgePipe } from '../../pipes/age.pipe';
import { DoubleNumberPipe } from '../../pipes/double-number.pipe';
// import { ProfilePhotoPipe } from '../../pipes/profile-photo.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pipe-directive',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AgePipe,
    UpperCasePipe,
    JsonPipe,
    DoubleNumberPipe,
    MatButtonModule,
    DebounceClickDirective
  ],
  templateUrl: './pipe-directive.component.html',
  styleUrl: './pipe-directive.component.scss'
})
export class PipeDirectiveComponent implements OnInit{
    // profilePhotoPipe = inject(ProfilePhotoPipe);
    // custom pipe
    myAge: number;
    photoUrl$: Observable<string>;
    photoId = 1;

    // default pipe
    text: string = 'Hello Angular';
    today: Date = new Date();
    price: number = 1234.56;
    
    // Impure pipe
    user: { name: string, age: number, location: string } = {
      name: 'John Doe',
      age: 30,
      location: 'New York'
    };
    numbers: number[] = [1, 2, 3, 4, 5];

    // Component Directive
    componentDirective = `
    @Component({
      selector: 'app-tree',
      templateUrl: './component-architecture.html',
      styleUrl: './component-architecture.scss',
      standalone: true,
      imports: [MatTreeModule, MatButtonModule, MatIconModule]
    })`;
    structuralDirective = `
    - @if, @else, @elseif, @for, @switch
    `

    // Structural Directives
    heroes = [
      { name: 'Superman', description: 'Strength and flight' },
      { name: 'Batman', description: 'Martial arts and intelligence' },
      { name: 'Wonder Woman', description: 'Strength and agility' }
    ];
    showHeroes = false;

    // Attribute Directive
    isActive = false;
    isDisabled = false;
    builtInAttributeDirective = `- ngClass, ngStyle, ngModel`;


    constructor(
    ) {
    }

    ngOnInit(): void {
      const dobMoment = moment('02/10/1996', 'MM/DD/YYYY');
      this.myAge = dobMoment.toDate().getTime();
    }


    changeArray(): void {
      this.numbers.push(this.numbers.length + 1);
    }

    toggleActive() {
      this.isActive = true;
      this.isDisabled = false;
    }
  
    toggleDisabled() {
      this.isDisabled = true;
      this.isActive = false;
    }

    submitClick() {
      console.log("Submit Button Clicked::::::::::::::");
    }

}
