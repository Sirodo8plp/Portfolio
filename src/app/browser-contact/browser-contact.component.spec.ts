import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserContactComponent } from './browser-contact.component';

describe('BrowserContactComponent', () => {
  let component: BrowserContactComponent;
  let fixture: ComponentFixture<BrowserContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
