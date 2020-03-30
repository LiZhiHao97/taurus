import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-editor',
  templateUrl: './info-editor.page.html',
  styleUrls: ['./info-editor.page.scss'],
})
export class InfoEditorPage implements OnInit {
  userDatas;
  constructor() { }

  ngOnInit() {
    console.log(this.userDatas);
  }

}
