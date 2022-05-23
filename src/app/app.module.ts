import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalInputComponent } from './terminal-input/terminal-input.component';
import { TerminalOutputComponent } from './terminal-output/terminal-output.component';
import { BrowserComponent } from './browser/browser.component';
import { BrowserTabsComponent } from './browser-tabs/browser-tabs.component';
import { BrowserSearchComponent } from './browser-search/browser-search.component';
import { FileViewerComponent } from './file-viewer/file-viewer.component';
import { BrowserProjectsComponent } from './browser-projects/browser-projects.component';
import { BrowserAboutComponent } from './browser-about/browser-about.component';
import { BrowserContactComponent } from './browser-contact/browser-contact.component';
import { MenuComponent } from './menu/menu.component';
import { DesktopComponent } from './desktop/desktop.component';
import { PageThemeTogglerComponent } from './page-theme-toggler/page-theme-toggler.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalInputComponent,
    TerminalOutputComponent,
    BrowserComponent,
    BrowserTabsComponent,
    BrowserSearchComponent,
    FileViewerComponent,
    BrowserProjectsComponent,
    BrowserAboutComponent,
    BrowserContactComponent,
    MenuComponent,
    DesktopComponent,
    PageThemeTogglerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
