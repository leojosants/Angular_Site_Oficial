import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss']
})

export class EmiterComponent implements OnInit {

  title: string = 'title intial';

  title2 = [
    {
      name: 'teste1',
    },
    {
      name: 'teste2',
    },
    {
      name: 'teste3',
    }
  ]

  constructor() { }

  ngOnInit(): void { }

  onChangeTitle($event: string) {
    if ($event === 'teste1') {
      this.title = this.title2[0].name;
    }
    else if ($event === 'teste2') {
      this.title = this.title2[1].name;
    }
    else {
      this.title = this.title2[2].name
    }
  }

}
