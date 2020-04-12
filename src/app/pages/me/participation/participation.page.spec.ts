import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParticipationPage } from './participation.page';

describe('ParticipationPage', () => {
  let component: ParticipationPage;
  let fixture: ComponentFixture<ParticipationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
