import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.scss'
})
export class LifecycleChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputValue: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('Child ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('Child ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('Child ngOnDestroy called');
  }



}
