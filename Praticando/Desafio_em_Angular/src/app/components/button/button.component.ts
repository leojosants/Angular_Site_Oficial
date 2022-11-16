import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() flags!: {name: string; flag: string; metodo: () => void}

  @Output() language = new EventEmitter;

  handleClickLanguage(): void {
    this.language.emit(this.flags.name);
  }

}
