import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { ViajeextraPage } from './viajeextra.page';

describe('ViajeextraPage', () => {
  let component: ViajeextraPage;
  let fixture: ComponentFixture<ViajeextraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeextraPage ],
      imports: [IonicModule.forRoot()],
      providers: [Geolocation]
    }).compileComponents();

    fixture = TestBed.createComponent(ViajeextraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
