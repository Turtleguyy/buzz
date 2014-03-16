var app = angular.module('buzz', []);
app.controller('ApplicationController', function() {

  var lyrics = [
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
  ];

  function init() {
    attachEventListeners();
  };

  function attachEventListeners() {
    $('.bee').on('click', onBeeClick);
  };

  function bringBackTheBee() {
    transitionText(1500);
    setTimeout(function() {
      $('h1').hide();
      $bee.show().toggleClass('go-away come-back');
    }, 2500);
  };

  function changeText(text, line) {
    $('h1').html(text).slabText().toggleClass('in out');

    if (line + 1 < lyrics.length) {
      nextLine(line + 1);
    } else {
      bringBackTheBee();
    }
  };

  function nextLine(line) {
    var lyric = lyrics[line];
    transitionText(lyric.delay - 1000);

    setTimeout(function() {
      changeText(lyric.text, line);
    }, lyric.delay);
  };

  function transitionText(delay) {
    setTimeout(function() {
      $('h1').toggleClass('in out');
    }, delay);
  };

  function onBeeClick() {
    $bee = $('.bee');
    $bee.toggleClass('go-away come-back');

    setTimeout(function() {
      $bee.hide().siblings('h1').show().toggleClass('in out');
      nextLine(0);
    }, 750);
  };

  init();

});
