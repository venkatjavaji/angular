import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor(private http : HttpClient) {
    
   }

   getNextTxn(userId : string) {
      return this.http.get('transaction/next?userId='+userId,{responseType: 'text'});
   }

   getAllTrxns() {
      return this.http.get('transaction');
   }


}
