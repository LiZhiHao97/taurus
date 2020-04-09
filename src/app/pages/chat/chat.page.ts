import { AuthService } from './../../services/auth/auth.service';
import { UserService } from './../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  otherInfo;
  myInfo;

  isOpenEmojiPicker = false;
  chatContent: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private UserService: UserService,
    private authSerVice: AuthService
  ) { }

  ngOnInit() {

  }

  switchEmojiPicker() {
    this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
  }
  
  onChanged(content) {
    this.chatContent = this.chatContent + content;
  }

  chat() {
    console.log(this.chatContent);
  }
}
