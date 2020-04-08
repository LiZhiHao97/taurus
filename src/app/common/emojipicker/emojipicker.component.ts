import { Component, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmojiProvider } from 'src/app/providers/emoji/emoji';

export const EMOJI_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmojipickerComponent),
  multi: true
}

@Component({
  selector: 'app-emojipicker',
  templateUrl: './emojipicker.component.html',
  styleUrls: ['./emojipicker.component.scss'],
})
export class EmojipickerComponent implements ControlValueAccessor {

  emojiArray = [];
  content: string;
  @Output() changed = new EventEmitter<string>();
  onChanged: Function;
  onTouched: Function;

  constructor(private emojiProvider: EmojiProvider) {
    this.emojiArray = this.emojiProvider.getEmojis();
    console.log(this.emojiArray);
  }

  writeValue(obj: any): void {
    this.content = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
    this.setValue(this.content);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(val: any) {
    this.content = val;
    this.changed.emit(this.content);
  }
}
