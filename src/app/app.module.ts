import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, isPlatform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge'
import { Camera } from '@ionic-native/camera/ngx';
import { MatExpansionModule } from '@angular/material/expansion';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const getConfig = () => {
  if(isPlatform('hybrid')) {
    return {
      backButtonText: 'Atraz',
      tabButtonLayout: 'label-hide',
      hardwareBackButton: true
    }
  }
return {
  menuIcon: 'ellipsis-vertical'
}

}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot({ rippleEffect: false, mode: 'md' }), 
    AppRoutingModule, BrowserAnimationsModule, MatBadgeModule, MatExpansionModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Camera, Geolocation, SQLite, NativeStorage, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}