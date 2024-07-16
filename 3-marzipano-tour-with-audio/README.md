# MARZIPANO TOUR with AUDIO

### Engage your visitors, your students... !

<ins>Demo here :</ins> <a href="https://jp-pelletier.github.io/3-marzipano-tour-with-audio/">3. MARZIPANO TOUR with AUDIO</a>

---

### This is exercise No. 3/3 to begin and familiarize yourself with MARZIPANO API coding.
---

# <br><p style="color:#aaaaff">Implement AUDIO elements in 6 easy steps :<br></p>

First, do exercise No.2 here : <a href="https://github.com/jp-pelletier/jp-pelletier.github.io/tree/main/2-marzipano-tour-with-html-and-videos" target="_blank">2. MARZIPANO TOUR with HTML & Videos</a> and reopen your app.
<br>

> Step 1 - In your root folder, create a sub folder named «&nbsp;<font color="red">*mp3*</font>&nbsp;» and download our audio files if you want...

> Step 2 - Download our «&nbsp;<font color="red">*index.js*</font>&nbsp;» file and replace your previous index.js file.<br><font color="green">*--> All additions and modifications in our index.js file are fully commented.*</font>

> Step 3 - Download our «&nbsp;<font color="red">*playsound.css*</font>&nbsp;» and «&nbsp;<font color="red">*splashscreen.css*</font>&nbsp;» files in your root directory.

> Step 4 - In your file «&nbsp;<font color="red">*index.html*</font>&nbsp;», insert these 2 pieces of code :

In HEAD :

```HTML
<!-- Keep the precedent css files unmodified : -->

<link rel="stylesheet" href="./vendor/reset.min.css">
<link rel="stylesheet" href="./style.css">
<link rel="stylesheet" href="./skin.css">
<link rel="stylesheet" href="./coach.css">
<link rel="stylesheet" href="./html.css">

<!-- Just add these 2 lines : -->
<link rel="stylesheet" href="./playsound.css">
<link rel="stylesheet" href="./splashscreen.css">
```
In BODY :

```HTML
<body class="multiple-scenes view-control-buttons">

<!-- Add this part of code here : -->

<audio id="audiobackground" preload="auto" loop>
   <source src="./mp3/Alpha-Romance.mp3" type="audio/mpeg">
</audio>
<audio id="jingle" preload="auto">
  <source src="./mp3/jingle.mp3" type="audio/mpeg">
</audio>

<script>
  const audioBackground = document.getElementById("audiobackground");
  audioBackground.volume = 0.8;
  const Jingle = document.getElementById("jingle");
  Jingle.volume = 0.4;
</script>

<div id="splashscreen" class="splash">
  <div class="splashchoice" onclick="document.getElementById('splashscreen').style.display='none'; audioBackground.play();">
    <img src="./img/stopSound.png" width="60" height="60"><br>
    Play Audio Background</div>
  <div class="splashchoice" onclick="document.getElementById('splashscreen').style.display='none';">
    <img src="./img/playSound.png" width="60" height="60"><br>
    Mute Audio Background</div>
</div>

<!---------- END ---------->

<div id="pano"></div>
```

> Step 5 - In your file «&nbsp;<font color="red">*data.js*</font>&nbsp;», for each scene, add the line "audiocoach" :

```HTML
"id": "Cerro-Paranal-Outdoor",
      "name": "Welcome to Cerro Paranal !",
      "coach": "Roger.png",
      "message": "<p>...etc...</p>",
      "audiocoach": "ROGER.mp3",
      "levels": [...
```

> Step 6 - In your file «&nbsp;<font color="red">*data.js*</font>&nbsp;», at the end, add the line "playsoundEnabled" :

```HTML
  "name": "Welcome to Cerro Paranal",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true,
    "playsoundEnabled": true
  }
};
```

# <br><p style="color:#aaaaff">Usage - Tips & Tricks<br></p>

The SPLASHSCREEN is used to offer a choice, but above all to create an interaction which allows the background sound to be played automatically.<br>
This screen could also be replaced by a short tutorial for example.

The SPLASHSCREEN is disabled when "playsoundEnabled" is set to "false" in data.js.


## :sparkles: And it's done !<BR>Good work everyone !
