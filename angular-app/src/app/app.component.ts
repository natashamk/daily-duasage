import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { appRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import {NotificationsModule, NotificationsService} from 'angular4-notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  duas;
  onedua;
  duaSearch2;  
  flag = false;
  check = false;

  constructor(private _httpService: HttpService, protected _pushNotifications: NotificationsService) { }

  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit() {
    this.getDuasFromService();
  }  
  notifyMe(){
    this._pushNotifications.addInfo('Information message');    
  }
  getDuasFromService() {
    let observable = this._httpService.getDuas();
    observable.subscribe((data) => {
      this.duas = data;
    });
  }
  getOneDuaFromService(name) {
    let observable = this._httpService.getOneDua(name);
    observable.subscribe(data => {
      this.onedua = data;
      this.flag = true;
    });
  }
  // showPushNotification(title: string = '', message: string, iconPush) {
  //   if (window.Notification && Notification.permission !== "denied") {
  //       Notification.requestPermission(function(status) {
  //           var n = new Notification(title, {
  //               body: message,
  //               icon: iconPush
  //           });
  //       });
  //   }
  // }
}