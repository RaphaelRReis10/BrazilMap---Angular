import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutheastComponent } from './southeast.component';

describe('SoutheastComponent', () => {
  let component: SoutheastComponent;
  let fixture: ComponentFixture<SoutheastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoutheastComponent]
    });
    fixture = TestBed.createComponent(SoutheastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
