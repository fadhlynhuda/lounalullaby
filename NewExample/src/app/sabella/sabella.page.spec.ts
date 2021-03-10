import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SabellaPage } from './sabella.page';

describe('SabellaPage', () => {
  let component: SabellaPage;
  let fixture: ComponentFixture<SabellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SabellaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SabellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
