import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'profile',
  template: `
  <mat-card>
      <mat-card-title>Profile Page </mat-card-title>
      <mat-card-content>
      <mat-list>
       <mat-list-item> Name : Arenas</mat-list-item>
       <mat-list-item> Email : {{profile?.email}}</mat-list-item>
      </mat-list>
      </mat-card-content>
  </mat-card>

  `,

})
export class ProfileComponent {

  constructor(public apiService: ApiService , private route: ActivatedRoute) {}
  profile;

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit() {

    // tslint:disable-next-line:no-var-keyword
    var id = this.route.snapshot.params.id;

    console.log(id);
    this.apiService.getProfile(id).subscribe(data => this.profile = data.json());
    }
  }

