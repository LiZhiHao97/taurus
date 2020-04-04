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
  @Input() answerId: number;

  constructor() { }

  ngOnInit() {}

  showDetail() {
    console.log(1);
  }
  
}
