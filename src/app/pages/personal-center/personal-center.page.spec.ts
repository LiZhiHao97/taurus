import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalCenterPage } from './personal-center.page';

describe('PersonalCenterPage', () => {
  let component: PersonalCenterPage;
  let fixture: ComponentFixture<PersonalCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
