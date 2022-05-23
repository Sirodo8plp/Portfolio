import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import terminalHistory from './ITerminalHistory';
import TerminalManagement from './terminalManagement';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TerminalComponent implements OnInit {
  terminalInput?: HTMLInputElement;
  commandHistory?: terminalHistory[];
  showHelp: boolean = true;
  manageTerminal: TerminalManagement;

  currentLocation: string = '~';

  constructor() {
    this.manageTerminal = new TerminalManagement();
    this.commandHistory = [];
  }

  ngOnInit(): void {}

  onSubmit(f: any) {
    this.commandHistory = this.manageTerminal.HandleCommand(
      f.value.terminalInput,
      this.commandHistory!
    );
    this.CheckTerminalHelp();
    this.ChangeLocation();
  }

  CheckTerminalHelp(): void {
    if (this.commandHistory!.length === 0) this.showHelp = false;
  }

  ChangeLocation(): void {
    this.currentLocation =
      TerminalManagement.terminalLocationHistory[
        TerminalManagement.terminalLocationHistory.length - 1
      ];
  }
}
