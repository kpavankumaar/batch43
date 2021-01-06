import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngconcepts';
  data = [{
    name: "angular"
  }]
  constructor(){
    console.log(" AppComponent constructor ");
  }
}
