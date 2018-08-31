import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedevelopItemeComponent } from './wedevelop-iteme.component';

describe('WedevelopItemeComponent', () => {
  let component: WedevelopItemeComponent;
  let fixture: ComponentFixture<WedevelopItemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedevelopItemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedevelopItemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
