import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  childMsg:string;


  parentMsg="Default message from App Component";

  greetingMsg(msg){
    console.log(msg);
    this.parentMsg=msg;
    
  }

  childData(childMsg){
    console.log("--- Invoked by child : "+childMsg);
    this.childMsg=childMsg;
    
  }

}
