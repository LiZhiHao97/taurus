import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.component.html',
  styleUrls: ['./topic-preview.component.scss'],
})
export class TopicPreviewComponent implements OnInit {
  @Input() sponsor;
  @Input() title;
  @Input() desc;
  @Input() topicId;
  @Input() tags;
  tagsResult: string = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const tags = [];
    for (const item of this.tags) {
      tags.push(item.name);
    }
    this.tagsResult = tags.join(' / ');
  }

  gotoDetailPage() {
    this.router.navigate([`/topic-detail/${this.topicId}`]);
  }
  
}
