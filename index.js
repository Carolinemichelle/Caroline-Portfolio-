anime({
    targets: "#Caroline path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 20},
    direction: 'alternate',
    loop: false
  });

