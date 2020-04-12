import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowingListPage } from './following-list.page';

describe('FollowingListPage', () => {
  let component: FollowingListPage;
  let fixture: ComponentFixture<FollowingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
