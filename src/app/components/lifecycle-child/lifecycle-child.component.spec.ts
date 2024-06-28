import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleChildComponent } from './lifecycle-child.component';

describe('LifecycleChildComponent', () => {
  let component: LifecycleChildComponent;
  let fixture: ComponentFixture<LifecycleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
