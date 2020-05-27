import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente001',
  templateUrl: './cliente001.component.html',
  styleUrls: ['./cliente001.component.scss']
})
export class Cliente001Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  /*url = 'https://radio.cloudserver.cl:7035/stream';*/   /*mi streming*/
  /*url = 'https://radio.acktib.com:8443/radio.ogg';*/   /*otro streming*/
  /*url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';*/   /*radioTest*/
  url = 'https://radio.cloudserver.cl:7035/stream';   /*streaming actual*/

  constructor() { }

  ngOnInit(): void {
  }

}
