import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagSettingPage } from './tag-setting.page';

describe('TagSettingPage', () => {
  let component: TagSettingPage;
  let fixture: ComponentFixture<TagSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
