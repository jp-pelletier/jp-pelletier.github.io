# MARZIPANO TOUR with a Coach

### Engage your visitors, your students... !

<ins>Demo here :</ins> <a href="https://jp-pelletier.github.io/1-marzipano-tour-with-a-coach/">1. MARZIPANO TOUR with a Coach</a>

---

### This repository contains two addons for MARZIPANO :
1. Implement a Coach.
2. Skin MARZIPANO

---

### This is exercise No. 1/3 to begin and familiarize yourself with MARZIPANO API coding.
---

# <br><p style="color:#aaaaff">Implement a Coach in 6 easy steps :<br></p>

First, create your own app in MARZIPANO TOOL here : <a href="https://www.marzipano.net/tool/" target="_blank">https://www.marzipano.net/tool/</a>
<br>Download it, unzip on your drive...

> Step 1 - In your folder «<font color="red">&nbsp;img&nbsp;</font>», create a sub folder named «&nbsp;<font color="red">*coaches*</font>&nbsp;» and download our pngs if you want...

> Step 2 - Download our «&nbsp;<font color="red">*index.js*</font>&nbsp;» file and replace the native Marzipano index.js file.<br><font color="green">*--> All additions and modifications in our index.js file are fully commented.*</font>

> Step 3 - Download our «&nbsp;<font color="red">*coach.css*</font>&nbsp;» file in your root directory.

> Step 4 - In your file «&nbsp;<font color="red">*index.html*</font>&nbsp;», insert these 2 pieces of code :

In HEAD :

```HTML
<!-- Keep the native Marzipano css files unmodified : -->

<link rel="stylesheet" href="./vendor/reset.min.css">
<link rel="stylesheet" href="style.css">

<!-- Just add this line : -->
<link rel="stylesheet" href="coach.css">
```
In BODY :

```HTML
<body class="multiple-scenes view-control-buttons">
<div id="pano"></div>

<!-- Add this part of code here : -->
<div id="coach-container">
  <div class="coach">
  </div>
  <div class="message">
  </div>
</div>
```
> Step 5 - In your file «&nbsp;<font color="red">*data.js*</font>&nbsp;», for each scene, add 2 variables named «&nbsp;<font color="red">*coach*</font>&nbsp;» and «&nbsp;<font color="red">*text*</font>&nbsp;» :

```HTML
<!-- Initially, each scene begins like this for example : -->

{
      "id": "Cerro-Paranal-Outdoor",
      "name": "Welcome to Cerro Paranal !"
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        }...etc
      ...etc
      ]
}

<!-- After update, you must have this for example : -->

{
      "id": "Cerro-Paranal-Outdoor",
      "name": "Welcome to Cerro Paranal !",
      "coach": "Roger.png",
      "message": "<p>Hello, I'm Roger...</p>",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        }...etc
      ...etc
      ]
}

<!-- Take care of commas at the end of each line. -->
<!-- The variable "coach" accepts the file name of an image. -->
<!-- Place the images of your coaches in your coaches folder. -->
<!-- The variable "text" accepts html tags. -->
<!-- The <p> tag is already formatted in coach.css. -->
```
> Step 6 - In your file «&nbsp;<font color="red">*data.js*</font>&nbsp;», for each entry of "linkHotspots", convert rotation unit from radians to degrees to avoid some possible bug when the value exceeds &#960; :

```HTML
<!-- Initially, a quarter rotation in radians looks like this : -->

       "linkHotspots": [
        {
          "yaw": 1.6,
          "pitch": 0,
          "rotation": 1,5708,
          "target": "Cerro-Paranal-Outdoor"
        }
      ],

<!-- After conversion to degrees, you must have this : -->

       "linkHotspots": [
        {
          "yaw": 1.6,
          "pitch": 0,
          "rotation": 90,
          "target": "Cerro-Paranal-Outdoor"
        }
      ],
 ```


Complete with your pictures, texts...

## :sparkles: And it's done !<BR>Good work everyone !

# <br><p style="color:#aaaaff">Skin MARZIPANO in 2 easy steps :<br></p>

the graphic charter added to MARZIPANO for this demo is quite simple.
But you can use, modify, improve it for all apps generated with the MARZIPANO TOOL.

> Step 1 - Download our «&nbsp;<font color="red">*skin.css*</font>&nbsp;» file in your root directory.

> Step 2 - In your file «&nbsp;<font color="red">*index.html*</font>&nbsp;», insert these 2 pieces of code :

In HEAD :

```HTML
<!-- Keep the native Marzipano css files unmodified : -->

<link rel="stylesheet" href="./vendor/reset.min.css">
<link rel="stylesheet" href="style.css">

<!-- Just add this line : -->
<link rel="stylesheet" href="skin.css">

<!-- The skin.css file must be called after style.css to override partially the native code. -->
```

In BODY, add a container here :

```HTML
<!-- Look for these lines : -->

<a href="javascript:void(0)" id="autorotateToggle">
  <img class="icon off" src="img/play.png">
  <img class="icon on" src="img/pause.png">
</a>

<a href="javascript:void(0)" id="fullscreenToggle">
  <img class="icon off" src="img/fullscreen.png">
  <img class="icon on" src="img/windowed.png">
</a>

<!-- Add this container : -->

<div id="commandbar">

<a href="javascript:void(0)" id="autorotateToggle">
  <img class="icon off" src="img/play.png">
  <img class="icon on" src="img/pause.png">
</a>

<a href="javascript:void(0)" id="fullscreenToggle">
  <img class="icon off" src="img/fullscreen.png">
  <img class="icon on" src="img/windowed.png">
</a>

</div>
```
Adjust your colors as you want in the :root section of skin.css...
## :sparkles: And it's done !