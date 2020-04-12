import { UserService } from './../../../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from './../../../services/topic/topic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {
  topics: any = [];

  constructor(
    private userSercice: UserService,
    private activiatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activiatedRoute.params.subscribe(params => {
      this.userSercice.listFollowingTopics(params.id).subscribe(res => {
        this.topics = res;
        console.log(res);
      })
    })
  }

}
