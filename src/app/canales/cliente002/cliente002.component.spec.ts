import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente002Component } from './cliente002.component';

describe('Cliente002Component', () => {
  let component: Cliente002Component;
  let fixture: ComponentFixture<Cliente002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cliente002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
