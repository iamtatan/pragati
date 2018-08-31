import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstudentsComponent } from './ourstudents.component';

describe('OurstudentsComponent', () => {
  let component: OurstudentsComponent;
  let fixture: ComponentFixture<OurstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
