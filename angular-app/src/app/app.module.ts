import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'
import { appRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {NotificationsModule, NotificationsService} from 'angular4-notify';


import { AppComponent } from './app.component';
import {SearchPipe } from './search.pipe'


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule, 
    appRoutingModule,
    FormsModule,
    NotificationsModule
  ],
  providers: [HttpService, NotificationsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
