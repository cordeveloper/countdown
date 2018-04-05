import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalCounter';
  progress = 0;
  totalCount = 0;
  
  updateProgressbar($event){
    this.progress = (1-($event/this.totalCount))*100;
    console.log($event);
  }

  initCountdown($event){
    this.totalCount = $event;
  }



}
