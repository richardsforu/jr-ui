import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular APP';
  name='Praveen Reddy S'
  cities=['A','B','C','D','E','F','G','H','I','J']

  status=true;

  city:string;

  pname:string;

  imagePath='assets/images/cts.png';


  // new Array

  friends =new Array();

  changeStatus(){
    this.status=!this.status;
  }

  addFriend(friendName){
    this.friends.push(friendName)
  }

  
  


}
