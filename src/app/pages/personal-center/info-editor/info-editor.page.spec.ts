import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoEditorPage } from './info-editor.page';

describe('InfoEditorPage', () => {
  let component: InfoEditorPage;
  let fixture: ComponentFixture<InfoEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
