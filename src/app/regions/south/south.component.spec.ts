import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthComponent } from './south.component';

describe('SouthComponent', () => {
  let component: SouthComponent;
  let fixture: ComponentFixture<SouthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouthComponent]
    });
    fixture = TestBed.createComponent(SouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
