/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MajidComponent } from './majid.component';

describe('MajidComponent', () => {
  let component: MajidComponent;
  let fixture: ComponentFixture<MajidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
