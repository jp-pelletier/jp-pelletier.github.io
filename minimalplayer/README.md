# MinimalPlayer

Responsive video player for minimalist WEB Design.

Demo here : <a href="https://jp-pelletier.github.io/minimalplayer/">MinimalPlayer</a>

## Usage

Use this part of minimalplayer.js to toggle between PLAY ▶ / STOP ■ :

```JavaScript
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
```
Use this part of minimalplayer.js to toggle between PLAY ▶ / PAUSE ❚❚ :

```JavaScript
playButton.addEventListener('click', () => {
  if(video.paused) {
    video.play()
    playButton.innerHTML = "<img class='play-pause' src='./img/pause.svg' alt='Pause icon'/>"
  }
  else {
    video.pause()
    playButton.innerHTML = "<img class='play-pause' src='./img/play.svg' alt='Play icon'/>"
  }
})
```

---

**Use classes** for selecting your players.

Almost ready for mobile, but maybe better with CSS @media rules if needed.

---