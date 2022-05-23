import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserTabsComponent } from './browser-tabs.component';

describe('BrowserTabsComponent', () => {
  let component: BrowserTabsComponent;
  let fixture: ComponentFixture<BrowserTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
