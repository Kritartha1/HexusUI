import { Injectable } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl=environment.apiBaseUrl;


  constructor(private http:HttpClient) {

   }

   getMessages(pageNumber:number,pageSize:number,container:string){
    
   }
}
