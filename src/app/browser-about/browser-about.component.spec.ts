import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAboutComponent } from './browser-about.component';

describe('BrowserAboutComponent', () => {
  let component: BrowserAboutComponent;
  let fixture: ComponentFixture<BrowserAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
