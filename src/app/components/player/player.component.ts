import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = 'https://av03.upstream-media.ch/canal3francais-192.mp3';


  constructor() {

  }

  ngOnInit(): void {
  }

}
