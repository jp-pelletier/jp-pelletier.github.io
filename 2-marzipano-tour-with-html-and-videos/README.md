# MARZIPANO TOUR with HTML & Videos

### Engage your visitors, your students... !

<ins>Demo here :</ins> <a href="https://jp-pelletier.github.io/2-marzipano-tour-with-html-and-videos/">2. MARZIPANO TOUR with HTML & Videos</a>

---

### This is exercise No. 2/3 to begin and familiarize yourself with MARZIPANO API coding.
---

# <br><p style="color:#aaaaff">Implement HTML containers in 4 easy steps :<br></p>

First, do exercise No.1 here : <a href="https://github.com/jp-pelletier/jp-pelletier.github.io/tree/main/1-marzipano-tour-with-a-coach" target="_blank">1. MARZIPANO TOUR with a Coach</a> and reopen your app.
<br>

> Step 1 - Download our «&nbsp;<font color="red">*index.js*</font>&nbsp;» file and replace your previous index.js file.<br><font color="green">*--> All additions and modifications in our index.js file are fully commented.*</font>

> Step 2 - Download our «&nbsp;<font color="red">*html.css*</font>&nbsp;» file in your root directory.

> Step 3 - In your file «&nbsp;<font color="red">*data.js*</font>&nbsp;», for each scene, add this piece of code :

```HTML
      ,
      "htmlScreen": [
        {
          "yaw": 0,
          "pitch": 0,
          "screen": "<!-- Your HTML content will be placed here. -->"
        }
      ]
```
<br>Explanations :

```HTML
<!-- Initially, each scene ends like this (summary texts) : -->

      "infoHotspots": [
        {
          "yaw": -0.1,
          "pitch": -0.1,
          "title": "VLT Unit 1 : ANTU",
          "text": "This name is meaning « Sun » in the Mapuche language..."
        },
        {
          "yaw": 0.37,
          "pitch": -0.1,
          "title": "VLT Unit 2 : KUEYEN",
          "text": "This name is meaning «Moon» in the Mapuche language..."
        },
        {
          "yaw": 0.84,
          "pitch": -0.1,
          "title": "VLT Unit 3 : MELIPAL",
          "text": "This name is meaning «Southern Cross »..."
        },
        {
          "yaw": 1.31,
          "pitch": -0.02,
          "title": "VLT Unit 4 : YEPUN",
          "text": "This name is meaning « Evening Star »..."
        }
      ]
    }, <!-- And the following scene begins... -->
    {
      "id": "Yepun-Indoor",
      "name": "Entering YEPUN",
      "coach": "Kathy.png",
      etc...

<!-- After update, you must have this : -->

      "infoHotspots": [
        {
          "yaw": -0.1,
          "pitch": -0.1,
          "title": "VLT Unit 1 : ANTU",
          "text": "This name is meaning « Sun » in the Mapuche language..."
        },
        {
          "yaw": 0.37,
          "pitch": -0.1,
          "title": "VLT Unit 2 : KUEYEN",
          "text": "This name is meaning «Moon» in the Mapuche language..."
        },
        {
          "yaw": 0.84,
          "pitch": -0.1,
          "title": "VLT Unit 3 : MELIPAL",
          "text": "This name is meaning «Southern Cross »..."
        },
        {
          "yaw": 1.31,
          "pitch": -0.02,
          "title": "VLT Unit 4 : YEPUN",
          "text": "This name is meaning « Evening Star »..."
        }
      ],
      "htmlScreen": [
        {
          "yaw": 0,
          "pitch": 0,
          "screen": "<!-- Your HTML content will be placed here. -->"
        }
      ]
    }, <!-- And the following scene begins... -->
    {
      "id": "Yepun-Indoor",
      "name": "Entering YEPUN",
      "coach": "Kathy.png",
      etc...

<!-- Take care of commas and line breaks at the end of each line. -->
```

### To insert the first video in the demo, the code looks like this :

```HTML
      ,
      "htmlScreen": [
        {
          "yaw": -1.22,
          "pitch": 0,
          "screen": "<iframe class=\"htmlScreen\" frameborder=\"0\" allowfullscreen=\"\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" title=\"ESOcast 120: Chile Chill 10 – “VLT Main Mirror Recoating”\" width=\"508\" height=\"290\" src=\"https://www.youtube.com/embed/vKAaFOuVvKs?modestbranding=1&amp;hl=en&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.eso.org&amp;widgetid=1\"></iframe>"
        }
      ]

<!-- Look and take care : Quotation marks (") must be escaped (\") in the definitions of values. -->
```
<br>

> Step 4 - Adjust «&nbsp;<font color="red">*yaw*</font>&nbsp;» and «&nbsp;<font color="red">*pitch*</font>&nbsp;» values :<br>--> yaw : adjusts the horizontal position of the component.<br>--> pitch : adjusts the vertical position of the component.

# <br><p style="color:#aaaaff">Usage - Tips & Tricks<br></p>

### These HTML containers can be used for HTML code, videos, iframes...
The demo contains 2 video iframes and 1 html exercise in iframe too.
### The containers windows toggle between 2 states : active / passive.
This trick prevents from propagating mouse events between containers and DOM nodes.
<br>
The containers windows are activated by one click into.
<br>
The containers windows return to passive state on mouse leave event.
<br>
### If a video is integrated and playing, switching to another scene stops the video.
<br>

## :sparkles: And it's done !<BR>Good work everyone !
