import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaurabellePage } from './haurabelle.page';

describe('HaurabellePage', () => {
  let component: HaurabellePage;
  let fixture: ComponentFixture<HaurabellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaurabellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaurabellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
