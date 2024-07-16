const videoPlayer = document.querySelectorAll('.video-player')

videoPlayer.forEach( (item) => {

  const video = item.querySelector('.video')
  const playButton = item.querySelector('.play-button')

  //------------------------------------------------------------------------------
  // Uncomment and use this section of code for a PLAY ▶ / STOP ■ toggle option.
  //------------------------------------------------------------------------------

  playButton.addEventListener('click', () => {
    if(video.paused) {
      video.play()
      playButton.innerHTML = "<img class='play-pause' src='./img/stop.svg' alt='Stop icon'/>"
    }
    else {
      video.pause()
      video.currentTime = 0
      video.load()
      playButton.innerHTML = "<img class='play-pause' src='./img/play.svg' alt='Play icon'/>"
    }
  })

  //------------------------------------------------------------------------------
  // Uncomment and use this section of code for a PLAY ▶ / PAUSE ❚❚ toggle option.
  //------------------------------------------------------------------------------

  // playButton.addEventListener('click', () => {
  //   if(video.paused) {
  //     video.play()
  //     playButton.innerHTML = "<img class='play-pause' src='./img/pause.svg' alt='Pause icon'/>"
  //   }
  //   else {
  //     video.pause()
  //     playButton.innerHTML = "<img class='play-pause' src='./img/play.svg' alt='Play icon'/>"
  //   }
  // })

  //------------------------------------------------------------------------------


  item.addEventListener('mouseover', () => {
    playButton.style.display = "block"
  })

  item.addEventListener('mouseleave', () => {
    playButton.style.display = "none"
  })

});