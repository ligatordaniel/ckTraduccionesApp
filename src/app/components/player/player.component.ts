import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  showPlayButton = true;  /*para crear el toggle de play y stop*/
  showStopButton = false; /*para crear el toggle de play y stop*/
  url = '';

  constructor() {
   /* onPlay() {
      this.url.playButton
    } */
  }

  ngOnInit(): void {
  }

}

/*
const functions = require('firebase-functions');
const https = require('https');
const info = functions.config().info;

exports.cronHandler = functions.pubsub.topic('minutely-tick').onPublish((event) => {
    return new Promise((resolve, reject) => {
        const hostname = info.hostname;
        const pathname = info.pathname;
        let data = '';
        const request = https.get(`https://${hostname}${pathname}`, (res) => {
            res.on('data', (d) => {
                data += d;
            });
            res.on('end', resolve);
        });
        request.on('error', reject);
    });
});

*/
