import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareDetailPage } from './share-detail.page';

describe('ShareDetailPage', () => {
  let component: ShareDetailPage;
  let fixture: ComponentFixture<ShareDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
