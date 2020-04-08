import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.scss'],
})
export class AnswerItemComponent implements OnInit {
  @Input() data;
  constructor(
    private router: Router
  ) { }

  ngOnInit() { 
    const previewContent = this.data.content.replace(/<img(.*?)>/g, "[图片]")
    this.data = {...this.data, content: previewContent};
  }


  follow() {
    console.log('follow');
  }

  gotoAnswerDetailPage() {
    this.router.navigate([`/topic/${this.data.topicId}/answer-detail/${this.data._id}`]);
  }
}
