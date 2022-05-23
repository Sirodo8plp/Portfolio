import FileTreeStructure from './projects.structure';
import terminalHistory from './ITerminalHistory';
import files from './vimFiles';
import { getLocaleDirection } from '@angular/common';

export default class TerminalManagement {
  static terminalLocationHistory: string[];
  constructor() {
    TerminalManagement.terminalLocationHistory = ['~'];
  }

  HandleCommand = (
    cmd: string,
    history: terminalHistory[]
  ): terminalHistory[] => {
    const commandInfo = cmd.trim().split(' ');
    const command = cmd.trim().split(' ')[0];
    console.log(command);
    if (
      commandInfo.length === 1 &&
      (command === 'clear' || command === 'CLEAR')
    ) {
      return this.HandleClearCommand(history);
    }

    if (commandInfo.length === 1 && (command === 'ls' || command === 'LS')) {
      return this.HandleLsCommand(history);
    }

    if (commandInfo.length === 2 && (command === 'cd' || command === 'CD')) {
      return this.HandleCdCommand(commandInfo, history);
    }
    if (commandInfo.length === 2 && (command === 'cat' || command === 'CAT')) {
      return this.HandleCatCommand(history, commandInfo);
    }
    return this.HandleErrorCommand(commandInfo, history);
  };

  HandleClearCommand = (history: terminalHistory[]): terminalHistory[] => {
    return [];
  };

  HandleCdCommand = (
    command: string[],
    history: terminalHistory[]
  ): terminalHistory[] => {
    const location =
      TerminalManagement.terminalLocationHistory[
        TerminalManagement.terminalLocationHistory.length - 1
      ];
    if (FileTreeStructure.has(command[1]) && command[1] !== '..') {
      TerminalManagement.terminalLocationHistory.push(command[1]);
    }
    if (
      command[1] === '..' &&
      TerminalManagement.terminalLocationHistory.length > 1
    ) {
      TerminalManagement.terminalLocationHistory.pop();
    }
    if (!FileTreeStructure.has(command[1]) && command[1] !== '..') {
      return this.HandleErrorCommand(
        command,
        history,
        `cd: no such file or directory: ${command[1]}`
      );
    }
    history.push({
      command: command.join(' '),
      isError: false,
      location: location,
      output: '',
    });

    return history;
  };

  HandleErrorCommand = (
    command: string[],
    history: terminalHistory[],
    msg = ''
  ): terminalHistory[] => {
    const cmd = command.join(' ');
    const location =
      TerminalManagement.terminalLocationHistory[
        TerminalManagement.terminalLocationHistory.length - 1
      ];
    let content = `
      <p class="terminal-command">${
        msg === '' ? `shell: command not found: ${cmd}` : msg
      }</p>`;

    history.push({
      command: cmd,
      location: location,
      output: content,
      isError: true,
    });
    return history;
  };

  HandleLsCommand = (history: terminalHistory[]): terminalHistory[] => {
    const location =
      TerminalManagement.terminalLocationHistory[
        TerminalManagement.terminalLocationHistory.length - 1
      ];
    let content = "<div class='terminal-cd-container'>";
    FileTreeStructure.get(location).forEach((value: any) => {
      value.type === 'folder'
        ? (content += `<p class="terminal-folder">${value.name}</p>`)
        : (content += `<p class="terminal-file">'${value.name}'<p>`);
    });
    content += '</div>';
    history.push({
      location: location,
      command: 'ls',
      isError: false,
      output: content,
    });
    return history;
  };

  HandleCatCommand = (
    history: terminalHistory[],
    command: string[]
  ): terminalHistory[] => {
    if (!files.has(command[1])) {
      return this.HandleErrorCommand(
        command,
        history,
        `${command.join(' ')}: No such file or directory`
      );
    }
    if (command[1] === "'myFace.png'") {
      let content = '<div class="terminal-image">';
      let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      files.get(command[1]).forEach((imageLine: string) => {
        content += `<pre>${imageLine}</pre>`;
      });
      content += '</div>';
      history.push({
        location: this.GetLocation(),
        command: command.join(' '),
        isError: false,
        output: content,
      });
      return history;
    }
    history.push({
      location: this.GetLocation(),
      command: command.join(' '),
      isError: false,
      output: `<pre class="object-output">${JSON.stringify(
        files.get(command[1]),
        null,
        10
      )}</pre>`,
    });
    return history;
  };

  GetLocation(index = 1) {
    return TerminalManagement.terminalLocationHistory[
      TerminalManagement.terminalLocationHistory.length - index
    ];
  }
}
