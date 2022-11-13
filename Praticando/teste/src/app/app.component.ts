import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  languages = {
    portugues: `Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:`,

    ingles: `Hello, my name is Leonardo Santos and I'm Frontend Developer, Technologies I have experience:`,

    espanhol: `Hola, mi nombre es Leonardo Santos y Soy Desarrollador Frontend, Tecnologías en las que tengo experiencia:`
  }

  translate = this.languages.portugues;

}
