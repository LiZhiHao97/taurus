import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnswerDetailPage } from './answer-detail.page';

describe('AnswerDetailPage', () => {
  let component: AnswerDetailPage;
  let fixture: ComponentFixture<AnswerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
