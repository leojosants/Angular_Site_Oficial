import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  language = [
    {
      pt: "Olá, meu nome é Leonardo Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",

      en: "Hello, my name is Leonardo Santos and I am a Front-End Developer, Technologies that I have experience:",

      es: "Hola, mi nombre es Leonardo Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:",
    },
  ];

  flags = [
    {
      name: "Brasil",
      flag: "../../../assets/images/brazil.png",
      metodo: () => (this.selected = this.language[0].pt),
    },
    {
      name: "Espanhol",
      flag: "../../../assets/images/spain.png",
      metodo: () => (this.selected = this.language[0].es),
    },
    {
      name: "Inglês",
      flag: "../../../assets/images/united-states.png",
      metodo: () => (this.selected = this.language[0].en),
    },
  ];

  selected = this.language[0].pt;

  // techs = [
  //   'JavaScript', 'React', 'Vue Js', 'Tailwind CSS',
  //   'Styled Components', 'Saas', 'TypeScript',
  //   'Angular','Java'
  // ]

  onChangeLanguage($event: string) {
    if ($event == "Brasil") {
      this.flags[0].metodo();
    } else if ($event == "Espanhol") {
      this.flags[1].metodo();
    } else {
      this.flags[2].metodo();
    }
  }

}
