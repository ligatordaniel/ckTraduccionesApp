import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente003',
  templateUrl: './cliente003.component.html',
  styleUrls: ['./cliente003.component.scss']
})
export class Cliente003Component implements OnInit {
  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  /*url = 'https://radio.cloudserver.cl:7035/stream';*/   /*mi streming*/
  /*url = 'https://radio.acktib.com:8443/radio.ogg';*/   /*otro streming*/
  /*url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';*/   /*radioTest*/
  url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';   /*otro streming*/

  constructor() { }

  ngOnInit(): void {
  }

}
