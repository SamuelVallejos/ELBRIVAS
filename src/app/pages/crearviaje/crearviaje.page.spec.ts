import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CrearviajePage } from './crearviaje.page';

describe('CrearviajePage', () => {
  let component: CrearviajePage;
  let fixture: ComponentFixture<CrearviajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearviajePage ],
      imports: [IonicModule.forRoot()],
      providers: [FormBuilder,ActivatedRoute]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
