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

  @Output()
  totalCount=new EventEmitter();

  btnCount(){
    this.count+=1;
    this.totalCount.emit(Number.parseInt(this.btnLbl));
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
