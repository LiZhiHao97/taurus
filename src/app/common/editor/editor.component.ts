import {Component, ElementRef, Renderer, Output, EventEmitter, OnInit } from '@angular/core';
import * as wangEditor from '../../../../node_modules/wangeditor/release/wangEditor.js';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  private editor: any;
  @Output() onPostData = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {}

  ngAfterViewInit() {
    const editordom = this.el.nativeElement.querySelector('#editorElem');
    this.editor = new wangEditor(editordom);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'strikeThrough',  // 删除线
      'emoticon',  // 表情
      'image',  // 插入图片
  ]
    this.editor.create();
  }

  clickHandle(): any {
    const data = this.editor.txt.html();
    return data;
  }
}
