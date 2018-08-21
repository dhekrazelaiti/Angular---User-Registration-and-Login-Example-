import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MessageComponent } from './message.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';


const routes = [
{path : 'register', component: RegisterComponent},
{path : 'login', component: LoginComponent},
{path : 'users', component: UsersComponent},
{path : 'profile/:id', component: ProfileComponent}
]
;
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule, MatToolbarModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
