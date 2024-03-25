import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  hubUrl=environment.hubsBaseUrl;
  private hubConnection?:HubConnection;
  private onlineUsersSource=new BehaviorSubject<string[]>([]);

  onlineUsers$=this.onlineUsersSource.asObservable();

  constructor() { }


  createHubConnection(user:User){
    
    this.hubConnection=new HubConnectionBuilder()
    .withUrl(this.hubUrl+'presence',{
      accessTokenFactory:()=>user.token.split(' ')[1]
    })
    .withAutomaticReconnect()
    .build();

    this.hubConnection.start().catch(err=>console.log("haha    "+err));

    this.hubConnection.on('UserIsOnline',username=>{
      console.log(`${username} has connected`)
    })

    this.hubConnection.on('UserIsOffline',username=>{
      console.log(`${username} has disconnected`)
    })

    this.hubConnection.on('GetOnlineUsers',usernames=>{
      this.onlineUsersSource.next(usernames);
    })

  }

  stopHubConnection(){
    this.hubConnection?.stop().catch(err=>console.log(err));
  }

}
