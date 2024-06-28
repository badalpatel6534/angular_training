import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentArchitectureComponent } from './component-architecture';

describe('ComponentArchitectureComponent', () => {
  let component: ComponentArchitectureComponent;
  let fixture: ComponentFixture<ComponentArchitectureComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
