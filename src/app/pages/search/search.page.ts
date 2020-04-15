import { TopicService } from './../../services/topic/topic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  isSearch = true;
  isShow = false;
  searchContent: string = '';
  result: any = [];

  hotSearch = [
    { 
      title: '四六级',
      subTitle: '大家都在搜',
      color: '#f19a39',
      index: 1
    },
    { 
      title: '高等数学',
      subTitle: '太难了!!!',
      color: '#f19a39',
      index: 2
    },
    { 
      title: '你上王者了吗',
      subTitle: '王者荣耀新赛季!!!',
      color: '#f19a39',
      index: 3
    },
    { 
      title: '开学',
      subTitle: '听说开学了?',
      color: '#bfbfbf',
      index: 4
    },
    { 
      title: '社团工作',
      subTitle: '你加入社团了吗',
      color: '#bfbfbf',
      index: 5
    },
    { 
      title: '新学期',
      subTitle: '我们又大了一届',
      color: '#bfbfbf',
      index: 6
    },
    { 
      title: '美食',
      subTitle: '吃货的福利',
      color: '#bfbfbf',
      index: 7
    },
    { 
      title: '我的大学生活',
      subTitle: '分享趣事',
      color: '#bfbfbf',
      index: 8
    },
  ]
  
  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit() {
  }

  switchToSerach() {
    this.isSearch = true;
    this.isShow = false
  }

  switchToShow() {
    this.isSearch = false;
    this.isShow = true;
  }

  change() {
    console.log(this.searchContent);
  }

  search() {
    this.topicService.find(this.searchContent).subscribe(res => {
      const newResult = JSON.parse(JSON.stringify(res));
      for (const item of newResult) {
        item.title = item.title.replace(this.searchContent, `<span class="high-light">${this.searchContent}</span>`);
        item.description = item.description.replace(this.searchContent, `<span class="high-light">${this.searchContent}</span>`);
      }
      console.log(newResult);
      this.result = newResult;
      this.switchToShow();
    });
  }

  gotoHot(content) {
    this.searchContent = content;
    this.search();
  }
  
}
