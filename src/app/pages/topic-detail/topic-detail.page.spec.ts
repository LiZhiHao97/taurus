import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicDetailPage } from './topic-detail.page';

describe('TopicDetailPage', () => {
  let component: TopicDetailPage;
  let fixture: ComponentFixture<TopicDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
