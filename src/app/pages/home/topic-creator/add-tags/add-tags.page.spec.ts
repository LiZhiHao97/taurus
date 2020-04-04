import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTagsPage } from './add-tags.page';

describe('AddTagsPage', () => {
  let component: AddTagsPage;
  let fixture: ComponentFixture<AddTagsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTagsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
