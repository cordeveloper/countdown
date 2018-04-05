import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit { 

  @Input() counterInit:number = 10;

  public counter:number = 0;
  @Output() initCountdown: EventEmitter<boolean> = new EventEmitter();
  @Output() totalCount: EventEmitter<number> = new EventEmitter();
  @Output() updateCounter: EventEmitter<number> = new EventEmitter();
  private fireCount: any;

  constructor() { }

  startCountdown(){
    this.clearCountdown();
    
    if( this.counterInit && this.counterInit > 0) {
      this.totalCount.emit(this.counterInit);
      this.initCountdown.emit(true);
      this.counter = this.counterInit;
      this.doCountdown();
    }
  }

  doCountdown(){
    this.updateCounter.emit(this.counter);
    this.fireCount = setTimeout( () => {
      this.counter = this.counter-1;
      this.processCount();
    }, 1000);
  }

  processCount(){
  
    
    if(this.counter > 0) {
      this.doCountdown();
     
     
    } else {
      this.updateCounter.emit(this.counter);
    }

    
  }


  resetCount(){
    this.startCountdown();
  }

  clearCountdown(){
    clearTimeout(this.fireCount);
  }


  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.clearCountdown();
  }

}
