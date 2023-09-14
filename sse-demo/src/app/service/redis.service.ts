import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedisService {
   redis = require('redis');
   client = this.redis.createClient();
  constructor() { 
   
  }
  public subscribe(channel: string, callback: (channel: string, message: string) => void) {
    this.client.subscribe(channel);
    this.client.on('message', callback);
  }
}
