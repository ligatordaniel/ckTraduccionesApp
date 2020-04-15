import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente001Component } from './cliente001.component';

describe('Cliente001Component', () => {
  let component: Cliente001Component;
  let fixture: ComponentFixture<Cliente001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cliente001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cliente001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
