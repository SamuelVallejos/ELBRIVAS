import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

import { InicioSesionPage } from './inicio-sesion.page';

describe('InicioSesionPage', () => {
  let component: InicioSesionPage;
  let fixture: ComponentFixture<InicioSesionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSesionPage ],
      imports: [IonicModule.forRoot()],
      providers: [SQLite,HttpClient,HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
