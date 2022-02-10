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
  blueIcon: {};

  constructor() { }

  ngOnInit() {

    this.blueIcon = Leaflet.icon({
      iconUrl: '../../assets/icon/marker-icon.png',
      iconSize: [25, 41],
    });

  }


  async ionViewDidEnter() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current position:', coordinates.coords.latitude);
    this.setGeoLocation(coordinates.coords.latitude, coordinates.coords.longitude);
  }

  setGeoLocation(latitude, longitude) {
    this.map = Leaflet.map('mapId').setView([latitude, longitude], 15);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([latitude, longitude], { icon: this.blueIcon }).addTo(this.map).bindPopup('Minha localização').openPopup();

  }

  ngOnDestroy() {
    this.map.remove();
  }

  plotarPontosMapa() {
    const arrayLatsLongs = [{ lat: '-15.837067', long: '-48.019114' },
                            { lat: '-15.838136', long: '-48.022155' },
                            { lat: '-15.840076', long: '-48.023507' },
                            { lat: '-15.841851', long: '-48.020943' },
                            { lat: '-15.841903', long: '-48.027412' },
                            { lat: '-15.836753', long: '-48.012950' },
                            { lat: '-15.835979', long: '-48.016609' },
                            { lat: '-15.834647', long: '-48.019753' },
                            { lat: '-15.832397', long: '-48.013509' },
                            { lat: '-15.829321', long: '-48.013788' },
                            { lat: '-15.837176', long: '-48.023498' }];

    const posicao = this.getRandomIntInclusive(0, arrayLatsLongs.length - 1);
    const latitude = arrayLatsLongs[posicao].lat;
    const longitude = arrayLatsLongs[posicao].long;

    Leaflet.marker([latitude, longitude], { icon: this.blueIcon }).addTo(this.map).bindPopup(`Ponto aleatório: [${posicao}]`).openPopup();
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
