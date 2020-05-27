import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  /*url = 'https://radio.cloudserver.cl:7035/stream';*/   /*mi streming*/
  /*url = 'https://radio.acktib.com:8443/radio.ogg';*/   /*otro streming*/
  url = 'https://radio.acktib.com:8443/radio.ogg';   /*otro streming*/



  constructor() {

  }

  ngOnInit(): void {
  }

}
