import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserProjectsComponent } from './browser-projects.component';

describe('BrowserProjectsComponent', () => {
  let component: BrowserProjectsComponent;
  let fixture: ComponentFixture<BrowserProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
