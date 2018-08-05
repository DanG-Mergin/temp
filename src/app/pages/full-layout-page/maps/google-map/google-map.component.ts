import { Component } from '@angular/core';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
})

export class GoogleMapComponent {
  // Google map lat-long
  lat: number = 42.395528;
  lng: number = -71.122649;
 
}