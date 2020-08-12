import { Component, OnInit } from '@angular/core';
import { SseService } from '../service/sse.service';

@Component({
  selector: 'app-server-side-event',
  templateUrl: './server-side-event.component.html',
  styleUrls: ['./server-side-event.component.css']
})
export class ServerSideEventComponent implements OnInit {

  constructor(private _sseSvc : SseService) { }

  ngOnInit() {
  }

}
