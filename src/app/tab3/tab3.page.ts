import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  map: Leaflet.Map;

  constructor() { }

  ngOnInit() {}

  async ionViewDidEnter() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates.coords.latitude);
    this.setGeoLocation(coordinates.coords.latitude, coordinates.coords.longitude);
  }

  setGeoLocation(latitude, longitude) {
    console.log(`LAT: ${latitude} - LON: ${longitude}`);

    this.map = Leaflet.map('mapId').setView([latitude, longitude], 15);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([latitude, longitude]).addTo(this.map).bindPopup('Minha localização').openPopup();

  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

}
