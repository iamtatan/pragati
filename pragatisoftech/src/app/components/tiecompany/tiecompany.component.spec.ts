import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiecompanyComponent } from './tiecompany.component';

describe('TiecompanyComponent', () => {
  let component: TiecompanyComponent;
  let fixture: ComponentFixture<TiecompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiecompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
