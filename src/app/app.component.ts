import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-cursos';
  sidenav: boolean = true;

  sidenavChange(value: boolean){
    this.sidenav = value;
  }
}
