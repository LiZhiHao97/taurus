import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyFavorPage } from './my-favor.page';

describe('MyFavorPage', () => {
  let component: MyFavorPage;
  let fixture: ComponentFixture<MyFavorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyFavorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
