import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowerListPage } from './follower-list.page';

describe('FollowerListPage', () => {
  let component: FollowerListPage;
  let fixture: ComponentFixture<FollowerListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowerListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
