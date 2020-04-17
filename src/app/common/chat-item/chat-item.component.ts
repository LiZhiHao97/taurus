import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
  @Input() data;
  @Input() userInfo;
  constructor() { }

  ngOnInit() {}

}
