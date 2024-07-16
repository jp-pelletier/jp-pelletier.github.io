/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Copyright 2024 - JP. PELLETIER
 * https://jp-pelletier.github.io
 * All modifications of the original software are commented.
 * All modifications are indexed : // JP.PELLETIER - MODIFICATION
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var data = window.APP_DATA;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');

  // JP.PELLETIER - MODIFICATION
  // Implement Coach addon - 1/6
  // Select coach div
  // ADD :
  var coachElement = document.querySelector('#coach-container .coach');

  // JP.PELLETIER - MODIFICATION
  // Implement Coach addon - 2/6
  // Select message div
  // ADD :
  var MessageElement = document.querySelector('#coach-container .message');

  // JP.PELLETIER - MODIFICATION
  // Implement background Audio addon - 1/2
  // Select toggle icon
  // ADD :
  var playsoundToggleElement = document.querySelector('#playsoundToggle');

  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.

    // JP.PELLETIER - MODIFICATION
    // Stick link hotspots icons on background - 1/1
    // REPLACED :

    // data.linkHotspots.forEach(function(hotspot) {
    //   var element = createLinkHotspotElement(hotspot);
    //   scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch }),;
    // });

    // By :

    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element,
        { yaw: hotspot.yaw, pitch: hotspot.pitch },
        { perspective: { radius: 640, extraTransforms: "rotateX(0deg)" }}
      );
    });

    // End.

    // JP.PELLETIER - MODIFICATION
    // Stick info hotspots icons on background - 1/1
    // linked with css class .link-hotspot
    // REPLACED :

    // data.infoHotspots.forEach(function(hotspot) {
    //   var element = createInfoHotspotElement(hotspot);
    //   scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    // });

    // By :

    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element,
        { yaw: hotspot.yaw, pitch: hotspot.pitch },
        { perspective: { radius: 640, extraTransforms: "rotateX(0deg)"}}
      );
    });

    // End.

    // JP.PELLETIER - MODIFICATION
    // Implement Video addon - 1/6
    // Including Videos in scene.
    // ADD :

    data.htmlScreen.forEach(function(item) {
      var element = createVideoElement(item);
      scene.hotspotContainer().createHotspot(element,
      { yaw: item.yaw, pitch: item.pitch },
      { perspective: { radius: 640 }});
    });

    // End.

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // JP.PELLETIER - MODIFICATION
  // Implement background Audio addon - 2/2

  // Set up background sound, if enabled.
  if (!data.settings.playsoundEnabled) {
    playsoundToggleElement.classList.add('disabled');
    document.getElementById('splashscreen').style.display='none';
  }
  else {
    playsoundToggleElement.classList.add('enabled');
  }

  // Set handler for background sound.
  function togglePlayaudioBackground() {
    if (!audioBackground.paused) {
      playsoundToggleElement.classList.remove('enabled');
      audioBackground.pause();
    }
    else {
      playsoundToggleElement.classList.add('enabled');
      audioBackground.play();
    }
  }

  playsoundToggleElement.addEventListener('click', togglePlayaudioBackground);

  // End.

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function(scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function() {
      switchScene(scene);
      // JP.PELLETIER - MODIFICATION
      // Add Jingle Sound to change scene :
      Jingle.play();

      // JP.PELLETIER - MODIFICATION
      // Stop videos when exiting a scene - 2/6
      // ADD :

      stopvideos();

      // End.

      // On mobile, hide scene list after selecting a scene.
      if (document.body.classList.contains('mobile')) {
        hideSceneList();
      }
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.3;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();

    // JP.PELLETIER - MODIFICATION
    // Add a 1mn delay for starting Autorotate when entering a new scene.
    // Modification 1/1.
    // REPLACED :

    // startAutorotate();

    // By :

    if (autorotateToggleElement.classList.contains('enabled')) {
      viewer.setIdleMovement(60000, autorotate);
    };
  
    // End.

    updateSceneName(scene);

    // JP.PELLETIER - MODIFICATION
    // Implement Coach addon - 3/6
    // Update Coach for each scene
    // ADD :
    updateCoach(scene);
    // End.

    // JP.PELLETIER - MODIFICATION
    // Implement Coach addon - 4/6
    // Update Message for each scene
    // ADD :
    updateMessage(scene);
    // End.

    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  // JP.PELLETIER - MODIFICATION
  // Implement Coach addon - 5/6
  // Implement Coach audio - 1/1
  // Insert HTML content from data.js in Coach div
  // ADD :
  function updateCoach(scene) {
    coachElement.innerHTML =
    "<audio id=\"audioCoach\" preload=\"auto\"><source src=\"./mp3/"
    + scene.data.audiocoach
    + "\" type=\"audio/mp3\"></audio>"
    + "<img src=\"./img/coaches/"
    + scene.data.coach
    + "\""
    + "onmouseenter=\"audioCoach.play();\""
    //+ "onmouseout=\"audioCoach.pause();audioCoach.currentTime = 0\""
    + ">";
  }
  // End.

  // JP.PELLETIER - MODIFICATION
  // Implement Coach addon - 6/6
  // Insert HTML content from data.js in Message div
  // ADD :
  function updateMessage(scene) {
    MessageElement.innerHTML = scene.data.message;
  }
  // End.

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  // JP.PELLETIER - MODIFICATION
  // Hide Scene Liste at startup
  // Modification 1/1
  // REPLACED :

  // function showSceneList() {
  //   sceneListElement.classList.add('enabled');
  //   sceneListToggleElement.classList.add('enabled');
  // }

  // By :

  function showSceneList() {
    sceneListElement.classList.add('disabled');
    sceneListToggleElement.classList.add('disabled');
  }

  // End.

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);

    
    // JP.PELLETIER - MODIFICATION
    // Increase delay before starting Autorotate from 3s. to 1mn.
    // Modification 1/1
    // REPLACED :

    // viewer.setIdleMovement(3000, autorotate);

    // By :

    viewer.setIdleMovement(60000, autorotate);

    // End.

  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];

      // JP.PELLETIER - MODIFICATION
      // Switch to degrees for adjusting orientation of linkHotspots icons
      // Modification 1/1.
      // REPLACED :

      // icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';

      // By :

      icon.style[property] = 'rotate(' + hotspot.rotation + 'deg)';

      // End.

      // JP.PELLETIER - MODIFICATION
      // Add Jingle Sound to change scene :
      icon.onclick = function() {Jingle.play();};
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    // JP.PELLETIER - MODIFICATION
    // Implement Video addon - 3/6
    // Stop videos when exiting a scene
    // ADD :

    icon.addEventListener('click', function() {
      stopvideos();
    });

    // End.

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // JP.PELLETIER - MODIFICATION
  // Implement Video addon - 4/6
  // Create Video element.
  // ADD :
    
  function createVideoElement(item) {
    var videowrapper = document.createElement('div');
    var videoContainer = document.createElement('div');
    videoContainer.classList.add('videocontainer','passivescreen');
    var containerStatus = document.createElement('div');
    const statusOff = "<p><span class=\"bullet red-on\">&#8226;</span>&nbsp;&nbsp;<span class=\"bullet green-off\">&#8226;</span></p>"
    const statusOn = "<p><span class=\"bullet red-off\">&#8226;</span>&nbsp;&nbsp;<span class=\"bullet green-on\">&#8226;</span></p>"
    containerStatus.classList.add('window-status');
    containerStatus.innerHTML = statusOff;


    videowrapper.addEventListener('click', () => {
      videoContainer.classList.remove('passivescreen');
      containerStatus.innerHTML = statusOn;
    });

    videowrapper.addEventListener('mouseleave', () => {
      videoContainer.classList.add('passivescreen');
      containerStatus.innerHTML = statusOff;
    });

    videoContainer.innerHTML = item.screen;
    videoContainer.appendChild(containerStatus);
    videowrapper.appendChild(videoContainer);
    stopTouchAndScrollEventPropagation(videowrapper);

    return videowrapper;
  }

  // JP.PELLETIER - MODIFICATION
  // Implement Video addon - 5/6
  // Reload video for poster.
  // ADD :
  var videos = Array.from(document.querySelectorAll('video'));

  videos.forEach(function(vid, idx) {
    vid.addEventListener('ended', resetVideo, false);
    vid.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  });

  function resetVideo(e) {
    this.load();
  }

  // JP.PELLETIER - MODIFICATION
  // Implement Video addon - 6/6
  // Stop video when exiting a scene.
  // ADD :
  var stopvideos = function () {
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === 'video') {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };

  // Prevent touch and scroll events from reaching the parent element.
  // https://stackoverflow.com/questions/75484657/add-click-event-after-mouse-up
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.

  switchScene(scenes[0]);

})();