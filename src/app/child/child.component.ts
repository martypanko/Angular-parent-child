import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()

  channelName = 'MenoMestoZvieraVec';

  @Output()
  sendMessageEmiter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(e:any){
    this.sendMessageEmiter.emit(e.target.value);
  }
}
