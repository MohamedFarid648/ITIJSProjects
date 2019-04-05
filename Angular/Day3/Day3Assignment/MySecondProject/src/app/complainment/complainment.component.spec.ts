import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainmentComponent } from './complainment.component';

describe('ComplainmentComponent', () => {
  let component: ComplainmentComponent;
  let fixture: ComponentFixture<ComplainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
