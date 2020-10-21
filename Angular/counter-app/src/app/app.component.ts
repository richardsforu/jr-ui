import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  buttons=[10,20,-10,-20,-30];

  btnCount:number=0;

  countButtons(){
    this.btnCount+=1;
    console.log(this.btnCount);
    
  }

}
