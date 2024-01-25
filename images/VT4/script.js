(function(){
    var script = {
 "defaultVRPointer": "laser",
 "mobileMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Image_2FB91125_3ED6_181A_41B6_CCC7FA2D4F43",
  "this.Image_3010A166_3F50_58FE_41B2_44CDEEEF6DA2"
 ],
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "start": "this.playAudioList([this.audio_1AC23C5F_3F3E_0826_41C8_8829D93184DD]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "vrPolyfillScale": 0.92,
 "horizontalAlign": "left",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 20,
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } }
 },
 "shadow": false,
 "downloadEnabled": false,
 "borderRadius": 0,
 "height": "100%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Player",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "overflow": "visible",
 "gap": 10,
 "minWidth": 20,
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "definitions": [{
 "label": "1",
 "id": "panorama_35246C4E_3ED6_0826_41BA_29C291A3B102",
 "class": "Panorama",
 "overlays": [
  "this.overlay_28C4693C_3ED6_086A_41C2_FA9C7B4180F7",
  "this.overlay_1F201087_3F53_F826_41C3_FEB5D2A4456E"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224",
   "yaw": -69.67,
   "backwardYaw": 16.64,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_308A5637_3F50_785D_41B4_923BDAD75DA5",
 "initialPosition": {
  "yaw": 144.69,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_2F4E26B4_3F50_7853_417C_C60BF1722A1D",
 "initialPosition": {
  "yaw": 110.33,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_309A8608_3F50_7833_41A0_B0EE701148EB",
 "initialPosition": {
  "yaw": 60.83,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "label": "4",
 "id": "panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_26EA9758_3F75_F82A_41B4_6CB440D6EF4D",
  "this.overlay_245830D8_3F76_382A_41CD_8144FC29ED10"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84",
   "yaw": -11.99,
   "backwardYaw": -119.17,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670",
   "yaw": 143.05,
   "backwardYaw": -35.31,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_camera",
 "initialPosition": {
  "yaw": 172.18,
  "pitch": -2.71,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_camera",
 "initialPosition": {
  "yaw": -84.54,
  "pitch": -0.88,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_2F5FE695_3F50_7852_41C2_EBF86C268AF3",
 "initialPosition": {
  "yaw": -68.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_1AC23C5F_3F3E_0826_41C8_8829D93184DD.mp3",
  "oggUrl": "media/audio_1AC23C5F_3F3E_0826_41C8_8829D93184DD.ogg",
  "class": "AudioResource"
 },
 "id": "audio_1AC23C5F_3F3E_0826_41C8_8829D93184DD",
 "data": {
  "label": "HMG"
 },
 "class": "MediaAudio"
},
{
 "label": "6",
 "id": "panorama_35E4B054_3ED6_183A_41C9_207ADDB89088",
 "class": "Panorama",
 "overlays": [
  "this.overlay_24170C31_3F72_087A_41C9_F3F01A330DBF",
  "this.overlay_207496DE_3F52_1826_41B6_DFB79418CFBD"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670",
   "yaw": 111.55,
   "backwardYaw": 147.14,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -68.83,
  "stereographicFactor": 1,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "targetPitch": -1.66,
   "easing": "cubic_in_out"
  }
 ],
 "id": "panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_camera",
 "initialPosition": {
  "yaw": -68.83,
  "pitch": -1.66,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_30B82656_3F50_78DF_41C4_A4880A968BDC",
 "initialPosition": {
  "yaw": -36.95,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_2F7E26C3_3F50_7835_41C5_D39A3C2414BF",
 "initialPosition": {
  "yaw": -32.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_30AF8675_3F50_78DD_41C8_BC01A93FED9B",
 "initialPosition": {
  "yaw": -68.45,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_2F6C46E3_3F50_79F6_41A2_031EE5E131C6",
 "initialPosition": {
  "yaw": -163.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_30E235C9_3F50_7835_41C6_EC1F780B7EE9",
 "initialPosition": {
  "yaw": 2.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "label": "5",
 "id": "panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2422E226_3F76_1866_4178_C566830577A8",
  "this.overlay_25EFE884_3F76_081A_41BC_81C33A13683D"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6",
   "yaw": -35.31,
   "backwardYaw": 143.05,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_35E4B054_3ED6_183A_41C9_207ADDB89088",
   "yaw": 147.14,
   "backwardYaw": 111.55,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3095E5E9_3F50_7BF2_41C7_70273336BA23",
 "initialPosition": {
  "yaw": 168.01,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "label": "3",
 "id": "panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84",
 "class": "Panorama",
 "overlays": [
  "this.overlay_2897B1B9_3F72_786A_41CD_7CD92EB4A2F6",
  "this.overlay_267DE488_3F72_182A_41BA_E855DBB6E845"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224",
   "yaw": 111.96,
   "backwardYaw": -177.26,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6",
   "yaw": -119.17,
   "backwardYaw": -11.99,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "label": "2",
 "id": "panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224",
 "class": "Panorama",
 "overlays": [
  "this.overlay_29A4A9E3_3F76_081E_41CB_31D27FA714F6",
  "this.overlay_2679D4B5_3F7E_187A_41A2_9250EE20C7E9"
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84",
   "yaw": -177.26,
   "backwardYaw": 111.96,
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_35246C4E_3ED6_0826_41BA_29C291A3B102",
   "yaw": 16.64,
   "backwardYaw": -69.67,
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "thumbnailUrl": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_t.jpg",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfov": 360,
 "hfovMax": 130,
 "vfov": 180,
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_35246C4E_3ED6_0826_41BA_29C291A3B102",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_35E4B054_3ED6_183A_41C9_207ADDB89088",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipTextShadowBlurRadius": 3,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "width": "100%",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "height": "100%",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#FFFFFF",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "borderSize": 0,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "top": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "paddingBottom": 0
},
{
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427"
 ],
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "layout": "absolute",
 "right": "0%",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "bottom": "0%",
 "height": "12.832%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "overflow": "visible",
 "gap": 10,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--- MENU"
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "width": 115.05,
 "right": "0%",
 "horizontalAlign": "left",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "top": "0%",
 "height": 641,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "overflow": "scroll",
 "gap": 10,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0
},
{
 "id": "Image_2FB91125_3ED6_181A_41B6_CCC7FA2D4F43",
 "left": "3.17%",
 "width": "16.667%",
 "maxWidth": 617,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_2FB91125_3ED6_181A_41B6_CCC7FA2D4F43.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "top": "4.48%",
 "height": "19.237%",
 "paddingRight": 0,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "maxHeight": 411,
 "class": "Image",
 "propagateClick": false,
 "click": "this.openLink('http://hondamitragresik.com/', '_blank')",
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand",
 "data": {
  "name": "Image10422"
 },
 "paddingBottom": 0
},
{
 "id": "Image_3010A166_3F50_58FE_41B2_44CDEEEF6DA2",
 "left": "72.91%",
 "right": "3.81%",
 "maxWidth": 300,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_3010A166_3F50_58FE_41B2_44CDEEEF6DA2.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "top": "4.15%",
 "borderRadius": 0,
 "height": "21.725%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 170,
 "class": "Image",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2785"
 },
 "paddingBottom": 0
},
{
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "propagateClick": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "paddingTop": 0,
 "transparencyActive": true,
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0
},
{
 "data": {
  "name": "IconButton MUTE"
 },
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "propagateClick": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "paddingTop": 0,
 "transparencyActive": true,
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224, this.camera_2F6C46E3_3F50_79F6_41A2_031EE5E131C6); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": -69.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_27C8E9A4_3F7E_081A_417B_33D5EB4EC9D7",
   "hfov": 25.38,
   "yaw": -69.67,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_28C4693C_3ED6_086A_41C2_FA9C7B4180F7",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -47.05,
 "pitch": 78.55,
 "bleaching": 0.7,
 "id": "overlay_1F201087_3F53_F826_41C3_FEB5D2A4456E",
 "class": "LensFlarePanoramaOverlay"
},
{
 "data": {
  "name": "IconButton GYRO"
 },
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "maxWidth": 58,
 "horizontalAlign": "center",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": 58,
 "borderRadius": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 58,
 "class": "IconButton",
 "propagateClick": false,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "paddingTop": 0,
 "transparencyActive": true,
 "cursor": "hand",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84, this.camera_309A8608_3F50_7833_41A0_B0EE701148EB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": -11.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D40ACE9_3F72_09EA_41C7_6037A6684912",
   "hfov": 25.38,
   "yaw": -11.99,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_26EA9758_3F75_F82A_41B4_6CB440D6EF4D",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670, this.camera_308A5637_3F50_785D_41B4_923BDAD75DA5); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": 143.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D5F6CE9_3F72_09EA_41B2_735B49E365EF",
   "hfov": 25.38,
   "yaw": 143.05,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_245830D8_3F76_382A_41CD_8144FC29ED10",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670, this.camera_2F7E26C3_3F50_7835_41C5_D39A3C2414BF); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": 111.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D5F3CE9_3F72_09EA_41B5_D795360CB942",
   "hfov": 25.38,
   "yaw": 111.55,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_24170C31_3F72_087A_41C9_F3F01A330DBF",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "yaw": -50.73,
 "pitch": 83.05,
 "bleaching": 0.7,
 "id": "overlay_207496DE_3F52_1826_41B6_DFB79418CFBD",
 "class": "LensFlarePanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6, this.camera_30B82656_3F50_78DF_41C4_A4880A968BDC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": -35.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D5F9CFA_3F72_09EE_41C3_7F567A104963",
   "hfov": 25.38,
   "yaw": -35.31,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_2422E226_3F76_1866_4178_C566830577A8",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35E4B054_3ED6_183A_41C9_207ADDB89088, this.camera_30AF8675_3F50_78DD_41C8_BC01A93FED9B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": 147.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D5E6CFA_3F72_09EE_41C4_9D72D471143C",
   "hfov": 25.38,
   "yaw": 147.14,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_25EFE884_3F76_081A_41BC_81C33A13683D",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224, this.camera_30E235C9_3F50_7835_41C6_EC1F780B7EE9); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": 111.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_27CAD9B4_3F7E_087A_41C8_F47C68226862",
   "hfov": 25.38,
   "yaw": 111.96,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_2897B1B9_3F72_786A_41CD_7CD92EB4A2F6",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6, this.camera_3095E5E9_3F50_7BF2_41C7_70273336BA23); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": -119.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1D40DCE9_3F72_09EA_41C1_4BF10254215C",
   "hfov": 25.38,
   "yaw": -119.17,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_267DE488_3F72_182A_41BA_E855DBB6E845",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84, this.camera_2F5FE695_3F50_7852_41C2_EBF86C268AF3); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": -177.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_27CA69B4_3F7E_087A_41C0_33FED956245B",
   "hfov": 25.38,
   "yaw": -177.26,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_29A4A9E3_3F76_081E_41CB_31D27FA714F6",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_35246C4E_3ED6_0826_41BA_29C291A3B102, this.camera_2F4E26B4_3F50_7853_417C_C60BF1722A1D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 25.38,
   "yaw": 16.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_22A3AC89_3F72_082A_41CA_C986F2114EC6",
   "hfov": 25.38,
   "yaw": 16.64,
   "pitch": -26.59,
   "distance": 100
  }
 ],
 "id": "overlay_2679D4B5_3F7E_187A_41A2_9250EE20C7E9",
 "data": {
  "label": "Arrow 03b"
 },
 "rollOverDisplay": false
},
{
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "right": "0%",
 "maxWidth": 3000,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "bottom": 53,
 "height": 2,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 2,
 "class": "Image",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "paddingBottom": 0
},
{
 "children": [
  "this.Image_3141E159_3ED2_182A_41C3_1220C6F827FA",
  "this.Image_3145D09D_3ED2_182A_41C2_8671E9AC7992",
  "this.Image_2F7A6572_3ED6_F8FE_41C5_A03BEB7ACFF6"
 ],
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "layout": "horizontal",
 "width": 1199,
 "horizontalAlign": "left",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "bottom": "0%",
 "height": 51,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 30,
 "overflow": "scroll",
 "gap": 3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0
},
{
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "width": "91.304%",
 "right": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "bottom": "0%",
 "height": "85.959%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "class": "Container",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "overflow": "scroll",
 "gap": 3,
 "minWidth": 1,
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 },
 "scrollBarMargin": 2,
 "paddingBottom": 0
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35246C4E_3ED6_0826_41BA_29C291A3B102_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_27C8E9A4_3F7E_081A_417B_33D5EB4EC9D7",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D40ACE9_3F72_09EA_41C7_6037A6684912",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35F44E44_3ED6_081A_41B3_2560BA7AC4B6_0_HS_1_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D5F6CE9_3F72_09EA_41B2_735B49E365EF",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35E4B054_3ED6_183A_41C9_207ADDB89088_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D5F3CE9_3F72_09EA_41B5_D795360CB942",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D5F9CFA_3F72_09EE_41C3_7F567A104963",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_2B2E4C3A_3ED2_086E_41B0_72D56F432670_0_HS_1_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D5E6CFA_3F72_09EE_41C4_9D72D471143C",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_27CAD9B4_3F7E_087A_41C8_F47C68226862",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35F03CE6_3ED6_09E6_41C2_6477CA0A2F84_0_HS_1_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_1D40DCE9_3F72_09EA_41C1_4BF10254215C",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0_HS_0_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_27CA69B4_3F7E_087A_41C0_33FED956245B",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_35C24E40_3ED6_081A_41CA_E7DAE31FE224_0_HS_1_0.png",
   "width": 925,
   "height": 480,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_22A3AC89_3F72_082A_41CA_C986F2114EC6",
 "colCount": 5,
 "class": "AnimatedImageResource"
},
{
 "id": "Image_3141E159_3ED2_182A_41C3_1220C6F827FA",
 "width": "11.634%",
 "maxWidth": 341,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_3141E159_3ED2_182A_41C3_1220C6F827FA.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "72.55%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 97,
 "class": "Image",
 "propagateClick": false,
 "click": "this.openLink('https://maps.app.goo.gl/WNiPQ6Hok93XkWNm6', '_blank')",
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand",
 "data": {
  "name": "Image10106"
 },
 "paddingBottom": 0
},
{
 "id": "Image_3145D09D_3ED2_182A_41C2_8671E9AC7992",
 "width": "18.91%",
 "maxWidth": 533,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_3145D09D_3ED2_182A_41C2_8671E9AC7992.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "72.549%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 97,
 "class": "Image",
 "propagateClick": false,
 "click": "this.openLink('https://wa.me/6281232063739', '_blank')",
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand",
 "data": {
  "name": "Image10182"
 },
 "paddingBottom": 0
},
{
 "id": "Image_2F7A6572_3ED6_F8FE_41C5_A03BEB7ACFF6",
 "width": "18.91%",
 "maxWidth": 533,
 "horizontalAlign": "center",
 "borderSize": 0,
 "url": "skin/Image_2F7A6572_3ED6_F8FE_41C5_A03BEB7ACFF6.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "shadow": false,
 "height": "72.55%",
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "maxHeight": 97,
 "class": "Image",
 "propagateClick": false,
 "click": "this.openLink('https://wa.me/6282141204897', '_blank')",
 "paddingLeft": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "cursor": "hand",
 "data": {
  "name": "Image10273"
 },
 "paddingBottom": 0
}],
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "data": {
  "name": "Player468"
 },
 "paddingBottom": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
