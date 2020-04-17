import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-preview',
  templateUrl: './share-preview.component.html',
  styleUrls: ['./share-preview.component.scss'],
})
export class SharePreviewComponent implements OnInit {
  @Input() data;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  gotoShareDetailPage() {
    this.router.navigate([`/share-detail/${this.data._id}`]);
  }
  
}
