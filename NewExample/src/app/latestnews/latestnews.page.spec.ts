import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LatestnewsPage } from './latestnews.page';

describe('LatestnewsPage', () => {
  let component: LatestnewsPage;
  let fixture: ComponentFixture<LatestnewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestnewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LatestnewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
