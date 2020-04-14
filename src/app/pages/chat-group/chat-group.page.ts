import { ChatService } from './../../services/chat/chat.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.page.html',
  styleUrls: ['./chat-group.page.scss'],
})
export class ChatGroupPage implements OnInit {
  messages = [];
  connection;


  userInfo;
  token;
  isOpenEmojiPicker = false;
  chatContent: string = '';

  constructor(
    private authService: AuthService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.authService.userDatas.subscribe((res: any) => {
      this.userInfo = res.user;
      this.token = res.token;
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  switchEmojiPicker() {
    this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
  }
  
  onChanged(content) {
    this.chatContent = this.chatContent + content;
  }

  chat() {
    this.chatService.sendMessage(this.chatContent);
    this.chatContent = '';
  }
}
