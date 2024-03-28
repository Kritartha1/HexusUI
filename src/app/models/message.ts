export interface Message{
    id:string;
    senderId:string;
    senderUsername:string;
    receipentId:string;
    receipentUsername:string;
    content:string;
    dateRead?:Date;
    messageSent:Date;
}

