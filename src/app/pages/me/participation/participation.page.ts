import { TopicService } from './../../../services/topic/topic.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.page.html',
  styleUrls: ['./participation.page.scss'],
})
export class ParticipationPage implements OnInit {
  topics: any = [];

  constructor(
    private activiatedRoute: ActivatedRoute,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.activiatedRoute.params.subscribe(params => {
      this.topicService.findByUser(params.id, 1).subscribe(res => {
        this.topics = res;
      })
    })
  }

}
