import { Component, Input  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Menu {
  icon: string,
  title: string
}

const menues: Menu[] = [{
    icon: 'people',
    title: 'Estudiantes'
  },{
    icon: 'class',
    title: 'Cursos'
  }
]; 

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input()
  sidenav_active = false;

  menuSelected: Menu = menues[0];
  small: boolean = false;

  constructor( private breakpoints: BreakpointObserver){
    this.breakpoints.observe('(max-width: 750px)').subscribe( data => this.small = data.matches);
  }

  changeMenu(menu: Menu): void{
    this.menuSelected = menu;
  }
  
  getMenues(): Menu[] {
    return menues;
  }
}
