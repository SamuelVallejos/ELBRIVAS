import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisvehiculosPage } from './misvehiculos.page';

describe('MisvehiculosPage', () => {
  let component: MisvehiculosPage;
  let fixture: ComponentFixture<MisvehiculosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisvehiculosPage ],
      imports: [IonicModule.forRoot()],
      providers: [HttpClient, HttpHandler]

    }).compileComponents();

    fixture = TestBed.createComponent(MisvehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
