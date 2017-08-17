import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tpage2Component } from './tpage2.component';

describe('Tpage2Component', () => {
  let component: Tpage2Component;
  let fixture: ComponentFixture<Tpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
