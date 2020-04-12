import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favor',
  templateUrl: './my-favor.page.html',
  styleUrls: ['./my-favor.page.scss'],
})
export class MyFavorPage implements OnInit {
  answers;

  constructor(
    private userSercice: UserService,
    private activiatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activiatedRoute.params.subscribe(params => {
      this.userSercice.listLikingAnswers(params.id).subscribe(res => {
        this.answers = res;
        console.log(res);
      })
    })
  }

}
