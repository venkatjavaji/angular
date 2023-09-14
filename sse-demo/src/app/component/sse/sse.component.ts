import { Component, OnInit } from '@angular/core';
import { SseService } from 'src/app/service/sse.service';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrls: ['./sse.component.css']
})
export class SseComponent implements OnInit {


  userId: string | undefined;
  constructor(private sseService: SseService) { }

  ngOnInit(): void {
  }

  getNexTxn() {
    if (this.userId) {
      console.log("^ getNextTxn start")
      this.sseService.getNextTxn(this.userId).subscribe(data => {
          console.log(data);
      });
    } else {
      console.error("userId should be entered!")
    }
    console.log("getNextTxn done $")
  }
}
