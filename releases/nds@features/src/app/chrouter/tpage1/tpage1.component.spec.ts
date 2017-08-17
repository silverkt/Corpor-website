import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tpage1Component } from './tpage1.component';

describe('Tpage1Component', () => {
  let component: Tpage1Component;
  let fixture: ComponentFixture<Tpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
