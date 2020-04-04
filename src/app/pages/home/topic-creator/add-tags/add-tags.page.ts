import { ToastService } from './../../../../services/toast/toast.service';
import { TagService } from './../../../../services/tag/tag.service';
import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.page.html',
  styleUrls: ['./add-tags.page.scss'],
})
export class AddTagsPage implements OnInit {
  searchContent = '';
  tags;
  searchTags;
  allTags;
  
  constructor(
    private navParams: NavParams,
    private tagService: TagService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.tagService.getAllTags().subscribe(res => {
      this.allTags = res;
    });
  }
  doClose() {
    this.navParams.data.modal.dismiss({
      tags: this.tags
    });
  }

  change() {
    if (this.searchContent.length) {
      const itemIds = [];
      let newTags = this.allTags.filter((item) => {
        const index = item.name.indexOf(this.searchContent);
        return index !== -1;
      });

      const curTags = [...this.tags];

      for (let item of curTags) {
        itemIds.push(item._id);
      }

      newTags = newTags.filter((item) => {
        const index = itemIds.indexOf(item._id);
        return index === -1;
      });

      this.searchTags = newTags;
      console.log(newTags);
    } else {
      this.searchTags = [];
    }
  }

  addTag(item) {
    if (this.tags.length === 5) {
      return this.toastService.presentToast('最多为话题添加5个标签');
    }
    let flag = true;
    for (let tag of this.tags) {
      if (item._id === tag._id) {
        flag = false;
      }
    }
    if (flag) {
      this.tags = [...this.tags, item];
    }
    this.change();
  }

  deleteTag(item) {
    const newTags = this.tags;
    const index = this.tags.indexOf(item);
    newTags.splice(index, 1);
    this.tags = newTags;
    this.change();
  }
}
