var APP_DATA = {
  "scenes": [
    {
      "id": "Cerro-Paranal-Outdoor",
      "name": "Welcome to Cerro Paranal !",
      "coach": "Roger.png",
      "message": "<p><span style=\"font-weight: bold;\">Hello ! I'm Roger.</span> Welcome to Cerro Paranal in Chile&nbsp;!</p><p>We are on a site of the <span style=\"color: #e83569\">European Southern Observatory</span>, in front of the VLT, the Very Large Telescope.</p><p><span style=\"color: #e83569\">Look around and click</span> the information hotspots. This site is really suprising ! You will discover and learn.</p><p><span style=\"color: #e83569\">Follow the tour</span> and for the next step, Kathy is waiting for you to discover the interior of YEPUN.</p><p><span style=\"color: #e83569\">You will have to pass an exercise</span> in YEPUN ! Look around when you get there...</p>",
      "audiocoach": "ROGER.mp3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3810.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": -0.8,
        "fov": 1.6
      },
      "linkHotspots": [
        {
          "yaw": 1.31,
          "pitch": -0.1,
          "rotation": -90,
          "target": "Yepun-Indoor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1,
          "pitch": -0.1,
          "title": "VLT Unit 1 : ANTU",
          "text": "This name is meaning «&nbsp;Sun&nbsp;» in the Mapuche language.<br><br>The 4 units of the VLT are equiped with 8.2-meter telescopes."
        },
        {
          "yaw": 0.37,
          "pitch": -0.1,
          "title": "VLT Unit 2 : KUEYEN",
          "text": "This name is meaning «&nbsp;Moon&nbsp;» in the Mapuche language.<br><br>The 8.2m diameter telescopes are housed in compact, thermally controlled buildings, which rotate synchronously with the telescopes."
        },
        {
          "yaw": 0.84,
          "pitch": -0.1,
          "title": "VLT Unit 3 : MELIPAL",
          "text": "This name is meaning «&nbsp;Southern Cross&nbsp;» in the Mapuche language.<br><br>The 4 units of the VLT can combine them into an astronomical interferometer (VLTI), which is used to resolve small objects."
        },
        {
          "yaw": 1.31,
          "pitch": -0.02,
          "title": "VLT Unit 4 : YEPUN",
          "text": "This name is meaning «&nbsp;Evening Star&nbsp;» in the Mapuche language.<br><br>The VLT has made an undisputed impact on observational astronomy. It is the most productive individual ground-based facility."
        }
      ],
      "htmlScreen": [
        {
          "yaw": -1.22,
          "pitch": 0,
          "screen": "<iframe class=\"htmlScreen\" frameborder=\"0\" allowfullscreen=\"\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" title=\"ESOcast 120: Chile Chill 10 – “VLT Main Mirror Recoating”\" width=\"508\" height=\"290\" src=\"https://www.youtube.com/embed/vKAaFOuVvKs?modestbranding=1&amp;hl=en&amp;rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.eso.org&amp;widgetid=1\"></iframe>"
        }
      ]
    },
    {
      "id": "Yepun-Indoor",
      "name": "Entering YEPUN",
      "coach": "Kathy.png",
      "message": "<p><span style=\"font-weight: bold;\">Hi ! I'm Kathy.</span> Welcome !<br>Here, we are in front of the laser system of YEPUN.</p><p><span style=\"color: #e83569\">The Laser Guide Star</span> - LGS - is part of the VLT´s adaptive optics system. It is used for adaptive optics when no good reference stars are found in the field of view. YEPUN typically observes with the laser guide star for about 25% of the time.</p><p><span style=\"color: #e83569\">Do you know the name of the planets</span> of our solar system ?</p><p><span style=\"color: #e83569\">Look behind you</span> and test your knowledge ! You can do this exercise.</p>",
      "audiocoach": "KATHY.mp3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3796,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.6
      },
      "linkHotspots": [
        {
          "yaw": 1.12,
          "pitch": -0.06,
          "rotation": -90,
          "target": "Night-in-Cerro-Paranal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.36,
          "pitch": -0.34,
          "title": "LGS Unit 3",
          "text": "YEPUN is equiped with 4 LGSF - Laser Guide Star Facility.<br><br>Each LGSU consists of a Launch Telescope System including a 22-W 589-nm Laser Head.<br><br>The mass of each LGSU at the centerpiece is approximately 1.8 tons."
        },
        {
          "yaw": 0.14,
          "pitch": -0.3,
          "title": "HEX of LGSU 2",
          "text": "The 4LGSF Platform hosts the water-water Heat Exchanger (HEX) of the laser cooling system.<br><br>No rotating fans for air ventilation are allowed at the telescope tube."
        },
        {
          "yaw": 0.36,
          "pitch": -0.5,
          "title": "Local control electronics",
          "text": "Includes the safety interlock system sub-station."
        }
      ],
      "htmlScreen": [
        {
          "yaw": 3.14,
          "pitch": 0,
          "screen": "<p class=\"videotitle\">TEST YOUR KNOWLEDGE !<br>WHAT IS THE NAME OF THE PLANETS OF OUR SOLAR SYSTEM ?<br><br><iframe class=\"htmlScreen\" src=\"https://learningapps.org/watch?app=9977426\"  width=\"950\" height=\"540\" allowfullscreen=\"false\" webkitallowfullscreen=\"false\" mozallowfullscreen=\"false\"></iframe></p>"
        }
      ]
    },
    {
      "id": "Night-in-Cerro-Paranal",
      "name": "One night in Cerro Paranal",
      "coach": "Mike.png",
      "message": "<p><span style=\"font-weight: bold;\">Hi ! I'm Mike !</span><br>For this part of the tour, raise your head and open your eyes !</p><p><span style=\"color: #e83569\">YEPUN is in action.</span> He's launching a powerful yellow laser beam into the sky. The beam creates a glowing spot - an artificial star - in the Earth’s atmosphere by exciting a layer of sodium atoms at an altitude of 90 km. This Laser Guide Star (LGS) is part of the VLT’s adaptive optics system.</p><p><span style=\"color: #e83569\">A small black hole discovered outside the Milky Way ?</span> Yes ! It's true ! Look at the video...</p>",
      "audiocoach": "MIKE.mp3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3799,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": -1.9,
        "fov": 1.6
      },
      "linkHotspots": [
        {
          "yaw": 1.6,
          "pitch": 0,
          "rotation": -90,
          "target": "Cerro-Paranal-Outdoor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8,
          "pitch": -0.2,
          "title": "One pillar of the Milky Way",
          "text": "The twin pillar is behind you."
        }
      ],
      "htmlScreen": [
        {
          "yaw": 0.4,
          "pitch": 0,
          "screen": "<iframe class=\"htmlScreen\" frameborder=\"0\" allowfullscreen=\"\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" title=\"Black Hole Discovered in Galaxy Next Door (ESOcast 245 Light)\" width=\"508\" height=\"290\" src=\"https://www.youtube.com/embed/qW-HXYXYybk\"></iframe>"
        }
      ]
    }
  ],
  "name": "Welcome to Cerro Paranal",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true,
    "playsoundEnabled": true
  }
};