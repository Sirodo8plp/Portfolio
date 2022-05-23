import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { TerminalComponent } from './terminal/terminal.component';

const routes: Routes = [
  { path: '', redirectTo: 'terminal', pathMatch: 'full' },
  { path: 'terminal', component: TerminalComponent },
  { path: 'browser/:tab', component: BrowserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
