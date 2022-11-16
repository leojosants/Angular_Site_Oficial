import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss']
})
export class TechsComponent {

  @Input() selected!: string;

  techs = [
    'JavaScript', 'React', 'Vue Js', 'Tailwind CSS',
    'Styled Components', 'Saas', 'TypeScript',
    'Angular','Java'
  ]



}
