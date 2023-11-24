import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralwestComponent } from './centralwest.component';

describe('CentralwestComponent', () => {
  let component: CentralwestComponent;
  let fixture: ComponentFixture<CentralwestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralwestComponent]
    });
    fixture = TestBed.createComponent(CentralwestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
