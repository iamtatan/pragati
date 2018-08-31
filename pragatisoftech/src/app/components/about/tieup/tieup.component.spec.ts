import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TieupComponent } from './tieup.component';

describe('TieupComponent', () => {
  let component: TieupComponent;
  let fixture: ComponentFixture<TieupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TieupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TieupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
