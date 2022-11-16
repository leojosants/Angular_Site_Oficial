import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.scss']
})

export class ChangeTitleComponent implements OnInit {

  @Input() title2!: {name: string};

  @Output() changeTitle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  handleClick() {
    this.changeTitle.emit(this.title2.name);
  }

}
