import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector : 'app-messages',
  templateUrl : './messages.component.html',
  styleUrls : ['./messages.component.css']
})
export class MessagesComponent{
  private buttonName='Clear';
  constructor(private messagesService: MessagesService){

  }
  
}