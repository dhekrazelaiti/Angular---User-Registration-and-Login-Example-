import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-message',
  template :  `
  <div *ngFor="let message of apiService.messages">
  <mat-card>{{message.message}}</mat-card>
  </div>
`,

})
export class MessageComponent {

  constructor(public apiService: ApiService) {}
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  this.apiService.getMessages();
  }
}
