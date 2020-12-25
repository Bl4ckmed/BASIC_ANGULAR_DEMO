/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmptableComponent } from './emptable.component';

describe('EmptableComponent', () => {
  let component: EmptableComponent;
  let fixture: ComponentFixture<EmptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
