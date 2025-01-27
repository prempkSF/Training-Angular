// data-communication.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  private grandparentDataSubject = new BehaviorSubject<number | null>(null);
  grandparentData$ = this.grandparentDataSubject.asObservable();

  // Method to send data to subscribers
  sendGrandparentData(data: any) {
    this.grandparentDataSubject.next(data);
  }
}
