import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CircleComponent } from './circle.component';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CircleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
