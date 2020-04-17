import { ChatService } from './../../services/chat/chat.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.page.html',
  styleUrls: ['./chat-group.page.scss'],
})
export class ChatGroupPage implements OnInit {
  userInfo;
  token;
  isOpenEmojiPicker = false;
  chatContent: string = '';
  isJoin = false;

  index = 0;

  messages = [];
  connection;

  constructor(
    private authService: AuthService,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.authService.userDatas.subscribe(async (res: any) => {
      this.userInfo = res.user;
      this.token = res.token;

      console.log(this.userInfo);
      if (this.userInfo && this.index === 0) {
        this.index++;
        this.connection = await this.chatService.getMessages().subscribe(message => {
          this.messages.push(message);
          console.log(this.messages);
        });
        if (!this.isJoin) {
          this.chatService.sendMessage({type: 'join', user: this.userInfo.name});
          this.isJoin = !this.isJoin;
        }
      }
    });
  }

  ngOnDestroy() {
    this.chatService.sendMessage({type: 'leave', user: this.userInfo.name});
    this.connection.unsubscribe();
  }

  switchEmojiPicker() {
    this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
  }

  onChanged(content) {
    this.chatContent = this.chatContent + content;
  }

  chat() {
    this.chatService.sendMessage({type: 'chat', user: this.userInfo, content: this.chatContent});
    this.chatContent = '';
  }
}
