import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent implements OnInit {

  techs = [
    'JavaScript',
    'React',
    'Vue Js',
    'Tailwind CSS',
    'Styled Components',
    'Saas',
    'Node',
    'TypeScript',
    'Angular',
    'Java'

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
