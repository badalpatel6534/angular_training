import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingLargeDataComponent } from './rendering-large-data.component';

describe('RenderingLargeDataComponent', () => {
  let component: RenderingLargeDataComponent;
  let fixture: ComponentFixture<RenderingLargeDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderingLargeDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderingLargeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
