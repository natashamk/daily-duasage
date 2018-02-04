import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { appRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router'

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}
    getDuas(){
      return this._http.get('/duas');
    }
    getOneDua(name){
      return this._http.get('/duas/'+name);
    }
}

