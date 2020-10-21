import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input()
  btnLbl:string;

  count=0;

  btnCount(){
    this.count+=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
