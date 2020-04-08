import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnswerCreatorPage } from './answer-creator.page';

describe('AnswerCreatorPage', () => {
  let component: AnswerCreatorPage;
  let fixture: ComponentFixture<AnswerCreatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCreatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerCreatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
