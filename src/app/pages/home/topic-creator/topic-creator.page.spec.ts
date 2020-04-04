import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicCreatorPage } from './topic-creator.page';

describe('TopicCreatorPage', () => {
  let component: TopicCreatorPage;
  let fixture: ComponentFixture<TopicCreatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicCreatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicCreatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
