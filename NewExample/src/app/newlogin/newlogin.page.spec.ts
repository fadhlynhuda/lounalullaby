import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewloginPage } from './newlogin.page';

describe('NewloginPage', () => {
  let component: NewloginPage;
  let fixture: ComponentFixture<NewloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
