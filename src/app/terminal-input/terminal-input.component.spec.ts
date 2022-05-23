import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalInputComponent } from './terminal-input.component';

describe('TerminalInputComponent', () => {
  let component: TerminalInputComponent;
  let fixture: ComponentFixture<TerminalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
