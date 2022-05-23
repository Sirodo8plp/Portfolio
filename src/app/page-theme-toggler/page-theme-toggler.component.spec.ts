import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageThemeTogglerComponent } from './page-theme-toggler.component';

describe('PageThemeTogglerComponent', () => {
  let component: PageThemeTogglerComponent;
  let fixture: ComponentFixture<PageThemeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageThemeTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageThemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
