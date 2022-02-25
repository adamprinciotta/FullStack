import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Princiotta", 'E234', 'adamprinciotta@gmail.com'];
  info2: string[] = ["Robert Jones", 'E235', 'robertjones@gmail.com'];
  info3: string[] = ["Michael Fisher", 'E236', 'michaelfisher@gmail.com'];

  getinfo1(): string[]{
    return this.info1;
  }
  getinfo2(): string[]{
    return this.info2;
  }
  getinfo3(): string[]{
    return this.info3;
  }
  constructor() { }
}
