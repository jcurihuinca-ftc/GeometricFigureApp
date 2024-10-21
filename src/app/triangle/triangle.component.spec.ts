import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TriangleComponent } from './triangle.component';

describe('TriangleComponent', () => {
  let component: TriangleComponent;
  let fixture: ComponentFixture<TriangleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TriangleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TriangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
