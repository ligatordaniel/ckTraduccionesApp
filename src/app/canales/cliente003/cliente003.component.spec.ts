import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente003Component } from './cliente003.component';

describe('Cliente003Component', () => {
  let component: Cliente003Component;
  let fixture: ComponentFixture<Cliente003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cliente003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
