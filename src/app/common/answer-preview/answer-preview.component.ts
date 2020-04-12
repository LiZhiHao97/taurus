import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-preview',
  templateUrl: './answer-preview.component.html',
  styleUrls: ['./answer-preview.component.scss'],
})
export class AnswerPreviewComponent implements OnInit {
  @Input() topicTitle: string;
  @Input() answerContent: string;
  @Input() operation: string;
  @Input() operator: string;
  @Input() voteCount: number;
  @Input() commentCount: number;
  @Input() time: string;
  @Input() answerId: string;
  @Input() topicId: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.answerContent = this.answerContent.replace(/<img(.*?)>/g, "[图片]");
  }

  gotoAnswerDetailPage() {
    this.router.navigate([`topic/${this.topicId}/answer-detail/${this.answerId}`]);
  }

  gotoTopicDetailPage() {
    this.router.navigate([`/topic-detail/${this.topicId}`]);
  }

  gotoPersonalCenter(id) {
    this.router.navigate([`/personal-center/${id}`]);
  }
}
