import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  hubUrl=environment.hubsBaseUrl;
  private hubConnection?:HubConnection;
  constructor() { }


  createHubConnection(user:User){
    
    this.hubConnection=new HubConnectionBuilder()
    .withUrl(this.hubUrl+'presence',{
      accessTokenFactory:()=>user.token
    })
    .withAutomaticReconnect()
    .build();

    this.hubConnection.start().catch(err=>console.log(err));

    this.hubConnection.on('UserIsOnline',username=>{
      console.log(`${username} has connected`)
    })

    this.hubConnection.on('UserIsOffline',username=>{
      console.log(`${username} has disconnected`)
    })

  }

  stopHubConnection(){
    this.hubConnection?.stop().catch(err=>console.log(err));
  }

}
