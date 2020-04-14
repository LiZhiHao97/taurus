import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoGroupPage() {
    this.router.navigate(['chat-group']);
  }
}
