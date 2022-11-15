import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-viajeextra',
  templateUrl: './viajeextra.page.html',
  styleUrls: ['./viajeextra.page.scss'],
})


export class ViajeextraPage implements OnInit {
  @ViewChild('map') mapRef: ElementRef;
  map: GoogleMap;

  ngAfterViewInit() {
    this.geolocationN();
  }

  geoData1: any;
  geoData2: any;

  geolocationN() {
    this.geolocation.getCurrentPosition().then((geposition: Geoposition) => {
      this.geoData1 = geposition.coords.latitude;
      this.geoData2 = geposition.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  constructor(private router: Router, public geolocation: Geolocation) { }


  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    const apiKeyy = 'AIzaSyCjzNwCf0M70qEphfGW7HcYxlP7toqQVZU';
    this.map = await GoogleMap.create({
      id: 'map1',
      apiKey: apiKeyy,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: -33.45694,
          lng: -70.64827,
        },
        zoom: 10,
      },

    });
    this.marcadores();
  }

  async marcadores() {
    const marcadores1: Marker[] = [
      {
        coordinate: {
          lat: -33.45694,
          lng: -70.64827
        },
        title: 'Comienzo de viaje'
      },
      {
        coordinate: {
          lat: -33.47694,
          lng: -70.94827
        },
        title: 'Fin del viaje'
      }];
    await this.map.addMarkers(marcadores1);
  }

  ngOnInit() {
  }

}
