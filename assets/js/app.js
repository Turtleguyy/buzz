var app = angular.module('buzz', []);
app.controller('ApplicationController', function() {

  this.beeState      = 'come-back';
  this.currentLine   = song.currentLine;
  this.shouldShowBee = true;

  this.onBeeClick = function() {
    this.beeState = 'go-away';

    var _this = this;
    setTimeout(function() {
      _this.shouldShowBee = false;
    }, 750);
  };
});

var song = {
  currentLine: '',
  shouldShowBee: true,

  _h1: $('h1'),
  _bee: $('.bee'),
  _lyrics: [
    { text: 'Buzz', delay: 0 },
    { text: 'Buzz', delay: 1250 },
    { text: 'What\'s the buzz?', delay: 1500 },
    { text: 'You\'re the one', delay: 1500 },
    { text: 'that I love', delay: 1000 },
    { text: 'just becuzz', delay: 1500 },
    { text: 'Cute and funny', delay: 1500 },
    { text: 'sweet as honey', delay: 1750 },
    { text: 'you\'re my fuzzy wuzzy', delay: 2000 },
    { text: 'babee', delay: 1500 }
  ],

  init: function() {
    // this.attachEventListeners();
  },

  attachEventListeners: function() {
    this._bee.on('click', $.proxy(this, 'onBeeClick'));
  },

  bringBackTheBee: function() {
    this.transitionText(1500);
    setTimeout(function() {
      song._h1.hide();
      song._bee.show().toggleClass('go-away come-back');
    }, 2500);
  },

  changeText: function(text, line) {
    this.setCurrentLine(line);
    $('h1').toggleClass('in out');

    if (line + 1 < this._lyrics.length) {
      this.nextLine(line + 1);
    } else {
      this.bringBackTheBee();
    }
  },

  nextLine: function(line) {
    var lyric = this._lyrics[line];
    this.transitionText(lyric.delay - 1000);

    setTimeout(function() {
      song.changeText(lyric.text, line);
    }, lyric.delay);
  },

  setCurrentLine: function(line) {
    this.currentLine = this._lyrics[line].text;
    this._h1.slabText();
  },

  transitionText: function(delay) {
    setTimeout(function() {
      song._h1.toggleClass('in out');
    }, delay);
  },

  onBeeClick: function() {
    this._bee.toggleClass('go-away come-back');

    this.setCurrentLine(0);
    setTimeout(function() {
      song.shouldShowBee = false;
      // song._bee.hide().siblings('h1').show().toggleClass('in out');
      song._h1.show().toggleClass('in out');
      song.nextLine(0);
    }, 750);
  }
};

song.init();
