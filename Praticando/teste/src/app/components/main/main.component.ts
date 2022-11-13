import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() translate!: string;

  // translate = {
  //   portugues: `Olá, meu nome é Leonardo Santos  e eu sou Desenvolvedor Front-end,
  //   Tecnologias que tenho experiência:`
  // }


  constructor() { }
  ngOnInit(): void {}

}
