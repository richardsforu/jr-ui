import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input()
  message:string;

  @Output()
  parentData=new EventEmitter();

  greetBack(){
    console.log("-- greetBack");
    this.parentData.emit(this.message+" too");
  }

  constructor() { }

  ngOnInit(): void {

  }

}
