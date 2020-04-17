import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareCreatorPage } from './share-creator.page';

describe('ShareCreatorPage', () => {
  let component: ShareCreatorPage;
  let fixture: ComponentFixture<ShareCreatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCreatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareCreatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
