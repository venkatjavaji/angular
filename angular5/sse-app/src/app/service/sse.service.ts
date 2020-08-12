import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SseService {

  eventSource: any = window['EventSource'];

  constructor(private _zone:NgZone) {
    let source = new this.eventSource('http://localhost:8080/sse/subscription');
    source.addEventListener('message',message => {
      console.log("data received => " + JSON.stringify(message.data));
    });
    source.addEventListener('error', error => {
      console.log("Error => "+error.data);
    })
  }

  
  

}
