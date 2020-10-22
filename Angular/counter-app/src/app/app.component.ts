import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  buttons=[10,20,-10,-20,-30];

  total:number=0;

  totalCount(btnLbl){
   
    console.log(btnLbl);
    this.total=this.total+btnLbl;
    
  }

}
