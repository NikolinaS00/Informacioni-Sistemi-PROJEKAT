import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'vjezba1';
  selectedMenu:any='Home';

  goTo(paramText:string){
    this.selectedMenu=paramText
  }
}
