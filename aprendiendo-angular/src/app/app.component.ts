import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Master en JS: Aprendiendo Angular';
  public mostrarVideojuegos: boolean = true;

  ocultarVideojuegos(value: boolean) {
    this.mostrarVideojuegos = value;
  }
}
