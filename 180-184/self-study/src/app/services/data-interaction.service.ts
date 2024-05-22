import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInteractionService {

  constructor() { }

  // dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>()

  dataEmit(d: string) {
    // this.dataEmitter.emit(d);
    this.dataEmitter.next(d);

  }
}
