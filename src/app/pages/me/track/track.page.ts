import { TopicService } from './../../../services/topic/topic.service';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {
  tracks;
  topics: any = [];
  constructor(
    private authService: AuthService,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.authService.tracks.subscribe((res: any) => {
      this.tracks = res.tracks;
      
      this.topicService.findByIds({ids: this.tracks}).subscribe(res => {
        this.topics = res;
        console.log(res);
      })
    });
  }

}
