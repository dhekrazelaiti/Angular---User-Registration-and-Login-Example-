import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SharedComponent } from './shared/shared.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
