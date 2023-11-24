import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NortheastComponent } from './northeast.component';

describe('NortheastComponent', () => {
  let component: NortheastComponent;
  let fixture: ComponentFixture<NortheastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NortheastComponent]
    });
    fixture = TestBed.createComponent(NortheastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
