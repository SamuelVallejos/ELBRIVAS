import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AgregarvehiculoPage } from './agregarvehiculo.page';

describe('AgregarvehiculoPage', () => {
  let component: AgregarvehiculoPage;
  let fixture: ComponentFixture<AgregarvehiculoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarvehiculoPage ],
      imports: [IonicModule.forRoot()],
      providers: [FormBuilder,ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
