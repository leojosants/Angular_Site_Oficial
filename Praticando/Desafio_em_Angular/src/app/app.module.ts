import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MainComponent } from './components/main/main.component';
import { TechsComponent } from './components/techs/techs.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ChangeTitleComponent } from './components/change-title/change-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    MainComponent,
    TechsComponent,
    EmiterComponent,
    ChangeTitleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
