import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorComponentComponent } from './interceptor-component.component';

describe('InterceptorComponentComponent', () => {
  let component: InterceptorComponentComponent;
  let fixture: ComponentFixture<InterceptorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
