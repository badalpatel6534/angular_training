import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryLeakComponent } from './memory-leak.component';

describe('MemoryLeakComponent', () => {
  let component: MemoryLeakComponent;
  let fixture: ComponentFixture<MemoryLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryLeakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
