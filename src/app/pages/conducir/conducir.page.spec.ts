import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConducirPage } from './conducir.page';

describe('ConducirPage', () => {
  let component: ConducirPage;
  let fixture: ComponentFixture<ConducirPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConducirPage ],
      imports: [IonicModule.forRoot()],
      providers: [HttpClient,HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(ConducirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
