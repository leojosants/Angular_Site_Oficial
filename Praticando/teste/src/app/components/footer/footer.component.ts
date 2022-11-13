import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() languages: string = '';

  @Output() changeTitle: EventEmitter<any> = new EventEmitter;

  flags = [
    {
      name: 'Português',
      src: '../../../assets/images/brazil.png'
    },
    {
      name: 'Inglês',
      src: '../../../assets/images/united-states.png'
    },
    {
      name: 'Espanhol',
      src: '../../../assets/images/spain.png'
    },
  ]

  constructor() { }
  ngOnInit(): void { }

  handleTitle() {
    // this.languages.emit();
  }


}
