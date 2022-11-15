import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';

import { EditarperfilPage } from './editarperfil.page';

describe('EditarperfilPage', () => {
  let component: EditarperfilPage;
  let fixture: ComponentFixture<EditarperfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarperfilPage ],
      imports: [IonicModule.forRoot()],
      providers: [NativeStorage,SQLite,HttpClient,HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
