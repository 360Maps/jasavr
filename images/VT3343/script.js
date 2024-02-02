(function(){
    var script = {
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "class": "Player",
 "horizontalAlign": "left",
 "start": "this.playAudioList([this.audio_68CC2ACD_65A8_90E3_41D6_3C1F7BCEC8EF]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "borderSize": 0,
 "downloadEnabled": false,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "minWidth": 20,
 "contentOpaque": false,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "definitions": [{
 "hfov": 360,
 "label": "standar",
 "id": "panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9",
   "yaw": -2.25,
   "backwardYaw": 32.35,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
   "yaw": 161.57,
   "backwardYaw": 172.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
   "yaw": -170.38,
   "backwardYaw": 172.42,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6AE3DC09_6743_AE48_41C7_8918C598C2CE",
  "this.overlay_697ECAFA_6743_ABCB_41C8_087923EFF159",
  "this.overlay_6A10E477_6742_BED8_41D6_A13402FCDD7F",
  "this.overlay_68D4B81D_6745_B649_41A3_6653AB992C6E",
  "this.overlay_74044ACC_6745_ABCF_41D4_750D9E0EC25E"
 ],
 "partial": false
},
{
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 5000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 22.77,
   "easing": "cubic_in_out",
   "targetHfov": 119
  }
 ],
 "class": "PanoramaCamera",
 "automaticRotationSpeed": 36,
 "id": "panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_camera",
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -1.79,
  "pitch": -90,
  "stereographicFactor": 1
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -1.79,
  "pitch": 22.77
 },
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_45DF830E_6529_18BD_41AD_5A3389C56533_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_45DF830E_6529_18BD_41AD_5A3389C56533",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_44A33704_66B9_9161_41CC_A0F55043A5A8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
   "media": "this.panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4",
   "camera": "this.panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_79775F93_6746_AA58_41C3_6FC2C9AF58DD",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79775F93_6746_AA58_41C3_6FC2C9AF58DD",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -162.8,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_79776F93_6746_AA58_41D7_8B84D4DBFC91",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_68CC2ACD_65A8_90E3_41D6_3C1F7BCEC8EF.mp3",
  "oggUrl": "media/audio_68CC2ACD_65A8_90E3_41D6_3C1F7BCEC8EF.ogg"
 },
 "autoplay": true,
 "id": "audio_68CC2ACD_65A8_90E3_41D6_3C1F7BCEC8EF",
 "data": {
  "label": "opening min15detik"
 }
},
{
 "idleSequence": "this.sequence_7A822F35_6746_AA58_41C8_294387F64753",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A822F35_6746_AA58_41C8_294387F64753",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -14.95,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7A823F35_6746_AA58_41D5_B4F8B373116D",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "standart309 (2)",
 "id": "panorama_449688C3_66B9_90E7_41B5_ED7671A983C9",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6",
   "yaw": 32.35,
   "backwardYaw": -2.25,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD",
   "yaw": -151.95,
   "backwardYaw": 75.77,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4",
   "yaw": -56.93,
   "backwardYaw": 133.92,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_745C96B2_6746_FA58_41D3_38EEE57E99F3",
  "this.overlay_74D2EA0A_6746_AA4B_41C9_25954F9187ED",
  "this.overlay_74A2E645_6746_7A38_41B3_DCEA70144F77"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B21A09D_6746_D649_41CF_E105D3570FB3",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B21A09D_6746_D649_41CF_E105D3570FB3",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 83.75,
  "pitch": 0
 },
 "id": "camera_7B21909D_6746_D649_41B9_371D17B779CA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_45DF830E_6529_18BD_41AD_5A3389C56533_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "standar308 (3)",
 "id": "panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
   "yaw": 163.41,
   "backwardYaw": -96.25,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_73045AB8_6742_AA57_41A0_E1AE11689E98"
 ],
 "partial": false
},
{
 "hfov": 360,
 "label": "junior (1)",
 "id": "panorama_45DF830E_6529_18BD_41AD_5A3389C56533",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC",
   "yaw": 52.42,
   "backwardYaw": 165.05,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_44945B0B_6529_08BB_41B2_F4C2595FCA4F"
 ],
 "partial": false
},
{
 "hfov": 360,
 "label": "standart309 (1)",
 "id": "panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9",
   "yaw": 75.77,
   "backwardYaw": -151.95,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_735B15E8_6742_59F7_41BB_40D8A54C1BB3"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B3170EB_6746_D7C9_41B8_6805DE841CFE",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B3170EB_6746_D7C9_41B8_6805DE841CFE",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -7.58,
  "pitch": 0
 },
 "id": "camera_7B3160EB_6746_D7C9_41D8_983C920DB6AC",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "standart309 (3)",
 "id": "panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9",
   "yaw": 133.92,
   "backwardYaw": -56.93,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_73272C86_675E_AE3B_41C2_3D019F8EE597"
 ],
 "partial": false
},
{
 "hfov": 360,
 "label": "junior (5)",
 "id": "panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50",
   "yaw": -95.84,
   "backwardYaw": 76.18,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41A082A9_6519_19E7_41CB_66960AFB1D0C",
  "this.overlay_76AAFADA_65B9_B0E1_41C0_1A07DF9AB6D4"
 ],
 "partial": false
},
{
 "hfov": 360,
 "label": "garden-jardim-exterior-atlantida-mar-hotel-virtual-tour-azores-island-terceira-acores-ilha-mar Panorama0000 Panorama0000",
 "id": "panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879",
 "audios": [
  "this.audio_6B8DB0F1_65AB_90A3_41D8_621FE781840C"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_45DF830E_6529_18BD_41AD_5A3389C56533"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6BAF4C91_651B_09A7_41D8_B6CCCD902863",
  "this.overlay_746C1111_651F_38A7_41D5_6A91A1358122",
  "this.overlay_72F078C8_6529_09A5_41B4_2547649F25AE",
  "this.overlay_72AEB7B0_653F_07E5_41D6_D819BD44853C",
  "this.overlay_79347AF9_6539_0967_41CC_D93A62C4CF10",
  "this.overlay_4EBA641B_65FF_F8DB_41C6_11FC11F2EE01",
  "this.overlay_4875A6B8_651B_79E5_41D2_0CA639D842BE",
  "this.overlay_55B5B069_6519_1967_41D4_9956045A8D1F",
  "this.overlay_7D5993CC_677E_59CF_41B1_744BCDBC1E5E",
  "this.overlay_7E6A6251_677D_DAD9_41D8_2B68E6480F14",
  "this.overlay_7E39628B_677D_DA48_41B3_17D532E68C61",
  "this.overlay_7C9958B9_6742_D649_41D7_C2C0D9566565"
 ],
 "partial": false
},
{
 "idleSequence": "this.sequence_7A9D3F74_6746_AADF_41C8_48532741E3AC",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A9D3F74_6746_AADF_41C8_48532741E3AC",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -104.23,
  "pitch": 0
 },
 "id": "camera_7A9EDF74_6746_AADF_41B5_AC07DCB37854",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7A91FF55_6746_AAD9_41C9_6FADD75963A7",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A91FF55_6746_AAD9_41C9_6FADD75963A7",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 177.75,
  "pitch": 0
 },
 "id": "camera_7A918F55_6746_AAD9_41D2_BAC200301614",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B2590AC_6746_D648_41D9_CAD3553EB527",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B2590AC_6746_D648_41D9_CAD3553EB527",
 "timeToIdle": 1900,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 85.39,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7B2580AC_6746_D648_41BD_89C19DAABFC3",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B3B70FB_6746_D7C9_41C9_6F29465D8E17",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B3B70FB_6746_D7C9_41C9_6F29465D8E17",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 28.05,
  "pitch": 0
 },
 "id": "camera_7B3B60FB_6746_D7C9_41C6_9497CA709F18",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7A895F45_6746_AA39_41D7_830071A9C14E",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7A895F45_6746_AA39_41D7_830071A9C14E",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 7.17,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7A897F45_6746_AA39_41C5_5BD2AC893981",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1900,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "standar308 (1)",
 "id": "panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6",
   "yaw": 172.42,
   "backwardYaw": 161.57,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44A33704_66B9_9161_41CC_A0F55043A5A8",
   "yaw": -1.64,
   "backwardYaw": -115.49,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374",
   "yaw": -96.25,
   "backwardYaw": 163.41,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_69B68A0A_6742_6A4B_41CC_C539CAD60C53",
  "this.overlay_687F2F48_6742_6A37_41D2_D119C1B79CE5",
  "this.overlay_68D2058F_6742_BE48_41D5_2EFDCD977DA5"
 ],
 "partial": false
},
{
 "idleSequence": "this.sequence_796B2F84_6746_AA3F_41D0_4FF2C646109C",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_796B2F84_6746_AA3F_41D0_4FF2C646109C",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -46.08,
  "pitch": 0
 },
 "id": "camera_796B3F84_6746_AA3F_41D6_71EDDB8E7EF3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "junior (3)",
 "id": "panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC",
   "yaw": -172.83,
   "backwardYaw": -0.82,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50",
   "yaw": 17.2,
   "backwardYaw": -92.15,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_404C54E9_651B_3967_41D7_1E51ADF2F812",
  "this.overlay_40A909AA_651B_0BE4_41D2_D3C4615BCD27"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B5DA07E_6746_D6CB_41D8_380F2CD48A1A",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B5DA07E_6746_D6CB_41D8_380F2CD48A1A",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -103.82,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7B5D907E_6746_D6CB_41C1_93A3F809542A",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B06411A_6746_D64B_41BB_B18D56836D2C",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B06411A_6746_D64B_41BB_B18D56836D2C",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 87.85,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7B07B11A_6746_D64B_41D5_EE716A3E98CE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "standar308 (2)",
 "id": "panorama_44A33704_66B9_9161_41CC_A0F55043A5A8",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C",
   "yaw": -115.49,
   "backwardYaw": -1.64,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7774CABF_674D_AA49_41C7_67BAA7B466A5"
 ],
 "partial": false
},
{
 "idleSequence": "this.sequence_7ABA8F26_6746_AA7B_41AE_FDCA98AB27E4",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7ABA8F26_6746_AA7B_41AE_FDCA98AB27E4",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -127.58,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7ABAAF26_6746_AA7B_419F_BAD6561CF72A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_6B8DB0F1_65AB_90A3_41D8_621FE781840C.mp3",
  "oggUrl": "media/audio_6B8DB0F1_65AB_90A3_41D8_621FE781840C.ogg"
 },
 "autoplay": true,
 "id": "audio_6B8DB0F1_65AB_90A3_41D8_621FE781840C",
 "data": {
  "label": "selamat datang"
 }
},
{
 "hfov": 360,
 "label": "junior (2)",
 "id": "panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_45DF830E_6529_18BD_41AD_5A3389C56533",
   "yaw": 165.05,
   "backwardYaw": 52.42,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81",
   "yaw": -94.61,
   "backwardYaw": 165.05,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044",
   "yaw": -0.82,
   "backwardYaw": -172.83,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_464E1283_6527_F9AB_41BE_30C3239F97E9",
  "this.overlay_4175A3A5_6527_1FEF_41D5_9DC782B83C1C",
  "this.overlay_41E96836_6527_08ED_41BF_59CF4CEE484C"
 ],
 "partial": false
},
{
 "idleSequence": "this.sequence_792D9FF1_6746_A9D9_4194_8D85B30DDDDA",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_792D9FF1_6746_A9D9_4194_8D85B30DDDDA",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 178.36,
  "pitch": 0
 },
 "id": "camera_792DAFF1_6746_A9D9_41CF_C52A206545C7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_79540FD2_6746_A9DB_41AF_736E3FD84401",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79540FD2_6746_A9DB_41AF_736E3FD84401",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 64.51,
  "pitch": 0
 },
 "id": "camera_79541FD2_6746_A9DB_41AD_C5BD5C3C0B65",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_79380010_6746_D658_41CD_A50F67B5AD20",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79380010_6746_D658_41CD_A50F67B5AD20",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 123.07,
  "pitch": 0
 },
 "id": "camera_79387010_6746_D658_41D4_EAB041189D76",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_797C6FA3_6746_AA79_41C6_B310B70AA979",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_797C6FA3_6746_AA79_41C6_B310B70AA979",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 84.16,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_797C7FA3_6746_AA79_41A3_49DE7BA8161B",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "junior (4)",
 "id": "panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC",
   "yaw": 165.05,
   "backwardYaw": -94.61,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41D03F00_651F_08A5_41B6_34CFD97207A4"
 ],
 "partial": false
},
{
 "idleSequence": "this.sequence_7B3E810A_6746_D648_41CF_3273D0D19DF8",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B3E810A_6746_D648_41CF_3273D0D19DF8",
 "timeToIdle": 1900,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 179.18,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7B3EF10A_6746_D648_41A4_5D528A4023E2",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B2D30CC_6746_D7CF_41D5_C618D3724CB0",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B2D30CC_6746_D7CF_41D5_C618D3724CB0",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -7.58,
  "pitch": 0
 },
 "id": "camera_7B2D20CC_6746_D7CF_41AC_9B4A5F2DA242",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "junior (6)",
 "id": "panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044",
   "yaw": -92.15,
   "backwardYaw": 17.2,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479",
   "yaw": 76.18,
   "backwardYaw": -95.84,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7DF8F000_6669_6F61_41D0_7FB015A39E88",
  "this.overlay_7DF80000_6669_6F61_41C1_4A42980320B0"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_camera",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7948EFC2_6746_AA3B_41D7_4E30B4CF3B1F",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7948EFC2_6746_AA3B_41D7_4E30B4CF3B1F",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -18.43,
  "pitch": 0
 },
 "id": "camera_7948FFC2_6746_AA3B_41D4_AF53E60DE0CE",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_79209FE1_6746_A9F8_41C6_60D9F947D40B",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_79209FE1_6746_A9F8_41C6_60D9F947D40B",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -16.59,
  "pitch": 0
 },
 "id": "camera_7920BFE1_6746_A9F8_41C5_6F0D4F79543A",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7AB27EF7_6746_ABD9_41D5_9A48F59472D5",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7AB27EF7_6746_ABD9_41D5_9A48F59472D5",
 "timeToIdle": 1900,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -14.95,
  "pitch": 0
 },
 "automaticRotationSpeed": 36,
 "id": "camera_7AB20EF7_6746_ABD9_41C6_6A31FF11DABD",
 "automaticZoomSpeed": 10
},
{
 "idleSequence": "this.sequence_7B2A10BC_6746_D64F_41D3_3267B4F33A2F",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_7B2A10BC_6746_D64F_41D3_3267B4F33A2F",
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": -147.65,
  "pitch": 0
 },
 "id": "camera_7B2A00BC_6746_D64F_41D6_7880D09CB741",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 15.91,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "timeToIdle": 1000,
 "initialPosition": {
  "hfov": 119,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_camera",
 "automaticZoomSpeed": 10
},
{
 "toolTipFontSize": 13,
 "toolTipOpacity": 0.5,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "width": "100%",
 "toolTipTextShadowColor": "#000000",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "minHeight": 50,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "height": "100%",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "paddingLeft": 0,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "transitionMode": "blending",
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "top": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "paddingBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ]
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 641,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "children": [
  "this.Image_76E601FC_652B_3B5D_41C2_F7F83760CA5C"
 ],
 "paddingRight": 0,
 "top": 34,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 140,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "absolute"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "0%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": 1.29,
   "yaw": -2.01
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.29
  }
 ],
 "useHandCursor": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6AE3DC09_6743_AE48_41C7_8918C598C2CE",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 151,
      "height": 151
     }
    ]
   },
   "pitch": 1.29,
   "yaw": 171.64
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.29
  }
 ],
 "useHandCursor": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_697ECAFA_6743_ABCB_41C8_087923EFF159",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9, this.camera_7B2A00BC_6746_D64F_41D6_7880D09CB741); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 76.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 100,
      "height": 200
     }
    ]
   },
   "pitch": -10.17
  }
 ],
 "useHandCursor": true,
 "id": "overlay_6A10E477_6742_BED8_41D6_A13402FCDD7F",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C, this.camera_7B2D20CC_6746_D7CF_41AC_9B4A5F2DA242); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 43.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 63,
      "height": 200
     }
    ]
   },
   "pitch": -11.15
  }
 ],
 "useHandCursor": true,
 "id": "overlay_68D4B81D_6745_B649_41A3_6653AB992C6E",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C, this.camera_7B3160EB_6746_D7C9_41D8_983C920DB6AC); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 21.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 200
     }
    ]
   },
   "pitch": -10.75
  }
 ],
 "useHandCursor": true,
 "id": "overlay_74044ACC_6745_ABCF_41D4_750D9E0EC25E",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_79775F93_6746_AA58_41C3_6FC2C9AF58DD",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7A822F35_6746_AA58_41C8_294387F64753",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6, this.camera_7A918F55_6746_AAD9_41D2_BAC200301614); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1C7544_6742_BE38_41C3_4A393F53BEE8",
   "pitch": -42.49,
   "yaw": 32.35,
   "distance": 100
  }
 ],
 "id": "overlay_745C96B2_6746_FA58_41D3_38EEE57E99F3",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4, this.camera_796B3F84_6746_AA3F_41D6_71EDDB8E7EF3); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -56.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1C1544_6742_BE38_41CF_94557165565C",
   "pitch": -42.49,
   "yaw": -56.93,
   "distance": 100
  }
 ],
 "id": "overlay_74D2EA0A_6746_AA4B_41C9_25954F9187ED",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD, this.camera_7A9EDF74_6746_AADF_41B5_AC07DCB37854); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1CD544_6742_BE38_4191_79874F2DC29E",
   "pitch": -30.2,
   "yaw": -151.95,
   "distance": 100
  }
 ],
 "id": "overlay_74A2E645_6746_7A38_41B3_DCEA70144F77",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B21A09D_6746_D649_41CF_E105D3570FB3",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C, this.camera_7B21909D_6746_D649_41B9_371D17B779CA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 163.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1B2544_6742_BE38_41D6_AAD5380F9BA7",
   "pitch": -42.49,
   "yaw": 163.41,
   "distance": 100
  }
 ],
 "id": "overlay_73045AB8_6742_AA57_41A0_E1AE11689E98",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC, this.camera_7AB20EF7_6746_ABD9_41C6_6A31FF11DABD); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4684D825_6529_08EF_41B8_93680E7DC165",
   "pitch": -30.2,
   "yaw": 52.42,
   "distance": 100
  }
 ],
 "id": "overlay_44945B0B_6529_08BB_41B2_F4C2595FCA4F",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9, this.camera_7B3B60FB_6746_D7C9_41C6_9497CA709F18); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1BE544_6742_BE38_41CD_BBF9115AD95B",
   "pitch": -30.2,
   "yaw": 75.77,
   "distance": 100
  }
 ],
 "id": "overlay_735B15E8_6742_59F7_41BB_40D8A54C1BB3",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B3170EB_6746_D7C9_41B8_6805DE841CFE",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_449688C3_66B9_90E7_41B5_ED7671A983C9, this.camera_79387010_6746_D658_41D4_EAB041189D76); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7E1D7544_6742_BE38_41AB_834876E001B5",
   "pitch": -42.49,
   "yaw": 133.92,
   "distance": 100
  }
 ],
 "id": "overlay_73272C86_675E_AE3B_41C2_3D019F8EE597",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50, this.camera_7B5D907E_6746_D6CB_41C1_93A3F809542A); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2D94E5_651B_196F_41C9_63F166ABE547",
   "pitch": -30.2,
   "yaw": -95.84,
   "distance": 100
  }
 ],
 "id": "overlay_41A082A9_6519_19E7_41CB_66960AFB1D0C",
 "enabledInCardboard": true
},
{
 "bleachingDistance": 0.63,
 "class": "LensFlarePanoramaOverlay",
 "yaw": 118.98,
 "pitch": 55.6,
 "bleaching": 0.63,
 "id": "overlay_76AAFADA_65B9_B0E1_41C0_1A07DF9AB6D4"
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 55.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 650,
      "height": 498
     }
    ]
   },
   "pitch": 18.81,
   "yaw": 1.2
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 55.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 15
     }
    ]
   },
   "pitch": 18.81
  }
 ],
 "useHandCursor": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6BAF4C91_651B_09A7_41D8_B6CCCD902863",
 "enabledInCardboard": true
},
{
 "bleachingDistance": 1,
 "class": "LensFlarePanoramaOverlay",
 "yaw": -15.36,
 "pitch": 60.92,
 "bleaching": 0.48,
 "id": "overlay_746C1111_651F_38A7_41D5_6A91A1358122"
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 345,
      "height": 457
     }
    ]
   },
   "pitch": 7.17,
   "yaw": 71.43
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 30.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": 7.17
  }
 ],
 "useHandCursor": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72F078C8_6529_09A5_41B4_2547649F25AE",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.openLink('https://wa.me/628999989900', '_blank')"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 32.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 16
     }
    ]
   },
   "pitch": 7.8
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 367,
      "height": 106
     }
    ]
   },
   "pitch": 7.8,
   "yaw": -147.91
  }
 ],
 "id": "overlay_72AEB7B0_653F_07E5_41D6_D819BD44853C",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 345,
      "height": 410
     }
    ]
   },
   "pitch": 5.61,
   "yaw": -65.36
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "hfov": 30.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 5.61
  }
 ],
 "useHandCursor": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_79347AF9_6539_0967_41CC_D93A62C4CF10",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 26.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 149,
      "height": 51
     }
    ]
   },
   "pitch": 11.81
  }
 ],
 "useHandCursor": true,
 "id": "overlay_4EBA641B_65FF_F8DB_41C6_11FC11F2EE01",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 76
     }
    ]
   },
   "pitch": 2.79,
   "yaw": 75.25,
   "distance": 50
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "X"
 },
 "maps": [
  {
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 2.79
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_4875A6B8_651B_79E5_41D2_0CA639D842BE",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 161,
      "height": 58
     }
    ]
   },
   "pitch": 10.92
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_55B5B069_6519_1967_41D4_9956045A8D1F",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 76
     }
    ]
   },
   "pitch": -4.84,
   "yaw": 85.62,
   "distance": 50
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "X"
 },
 "maps": [
  {
   "hfov": 8.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_10_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -4.84
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7D5993CC_677E_59CF_41B1_744BCDBC1E5E",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 76
     }
    ]
   },
   "pitch": 12.58,
   "yaw": -52.58,
   "distance": 50
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "X"
 },
 "maps": [
  {
   "hfov": 8.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_11_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 12.58
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7E6A6251_677D_DAD9_41D8_2B68E6480F14",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 8.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 76
     }
    ]
   },
   "pitch": 0.84,
   "yaw": -57.67,
   "distance": 50
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "X"
 },
 "maps": [
  {
   "hfov": 8.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_12_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 0.84
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7E39628B_677D_DA48_41B3_17D532E68C61",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 22.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6EC4F6D7_651B_19AB_41CD_2CB19BC79879_0_HS_13_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 129,
      "height": 55
     }
    ]
   },
   "pitch": 20.6
  }
 ],
 "useHandCursor": true,
 "id": "overlay_7C9958B9_6742_D649_41D7_C2C0D9566565",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7A9D3F74_6746_AADF_41C8_48532741E3AC",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7A91FF55_6746_AAD9_41C9_6FADD75963A7",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B2590AC_6746_D648_41D9_CAD3553EB527",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B3B70FB_6746_D7C9_41C9_6F29465D8E17",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7A895F45_6746_AA39_41D7_830071A9C14E",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44A33704_66B9_9161_41CC_A0F55043A5A8, this.camera_79541FD2_6746_A9DB_41AD_C5BD5C3C0B65); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7FD3B52F_674E_5E48_41D6_DD1B26A9E669",
   "pitch": -30.2,
   "yaw": -1.64,
   "distance": 100
  }
 ],
 "id": "overlay_69B68A0A_6742_6A4B_41CC_C539CAD60C53",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374, this.camera_7920BFE1_6746_A9F8_41C5_6F0D4F79543A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7FD2252F_674E_5E48_41BC_C6D90C1F26CF",
   "pitch": -42.49,
   "yaw": -96.25,
   "distance": 100
  }
 ],
 "id": "overlay_687F2F48_6742_6A37_41D2_D119C1B79CE5",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_415A40BC_66B9_F0A1_41D8_1B474CFAB8B6, this.camera_7948FFC2_6746_AA3B_41D4_AF53E60DE0CE); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -42.49
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7FD2552F_674E_5E48_41CD_5DDCEC4D4C35",
   "pitch": -42.49,
   "yaw": 172.42,
   "distance": 100
  }
 ],
 "id": "overlay_68D2058F_6742_BE48_41D5_2EFDCD977DA5",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_796B2F84_6746_AA3F_41D0_4FF2C646109C",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50, this.camera_7B07B11A_6746_D64B_41D5_EE716A3E98CE); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2CB4E5_651B_196F_41CD_74D944AC6CA4",
   "pitch": -30.2,
   "yaw": 17.2,
   "distance": 100
  }
 ],
 "id": "overlay_404C54E9_651B_3967_41D7_1E51ADF2F812",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC, this.camera_7B3EF10A_6746_D648_41A4_5D528A4023E2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2D44E5_651B_196F_41C1_D215FAF8374A",
   "pitch": -30.2,
   "yaw": -172.83,
   "distance": 100
  }
 ],
 "id": "overlay_40A909AA_651B_0BE4_41D2_D3C4615BCD27",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B5DA07E_6746_D6CB_41D8_380F2CD48A1A",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B06411A_6746_D64B_41BB_B18D56836D2C",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C, this.camera_792DAFF1_6746_A9D9_41CF_C52A206545C7); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7FD2C52F_674E_5E48_41CD_932D4BA2A69C",
   "pitch": -30.2,
   "yaw": -115.49,
   "distance": 100
  }
 ],
 "id": "overlay_7774CABF_674D_AA49_41C7_67BAA7B466A5",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7ABA8F26_6746_AA7B_41AE_FDCA98AB27E4",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_45DF830E_6529_18BD_41AD_5A3389C56533, this.camera_7ABAAF26_6746_AA7B_419F_BAD6561CF72A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2FA4D6_651B_19AD_41CD_37B42AE060B3",
   "pitch": -30.2,
   "yaw": 165.05,
   "distance": 100
  }
 ],
 "id": "overlay_464E1283_6527_F9AB_41BE_30C3239F97E9",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81, this.camera_7A823F35_6746_AA58_41D5_B4F8B373116D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -94.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2C64D6_651B_19AD_419B_6CE41C1B75F4",
   "pitch": -30.2,
   "yaw": -94.61,
   "distance": 100
  }
 ],
 "id": "overlay_4175A3A5_6527_1FEF_41D5_9DC782B83C1C",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044, this.camera_7A897F45_6746_AA39_41C5_5BD2AC893981); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2CD4D6_651B_19AD_41C8_C53887D9A1CE",
   "pitch": -30.2,
   "yaw": -0.82,
   "distance": 100
  }
 ],
 "id": "overlay_41E96836_6527_08ED_41BF_59CF4CEE484C",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_792D9FF1_6746_A9D9_4194_8D85B30DDDDA",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_79540FD2_6746_A9DB_41AF_736E3FD84401",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_79380010_6746_D658_41CD_A50F67B5AD20",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_797C6FA3_6746_AA79_41C6_B310B70AA979",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC, this.camera_7B2580AC_6746_D648_41BD_89C19DAABFC3); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4E2D04E5_651B_196F_41A7_5CBA8322F106",
   "pitch": -30.2,
   "yaw": 165.05,
   "distance": 100
  }
 ],
 "id": "overlay_41D03F00_651F_08A5_41B6_34CFD97207A4",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B3E810A_6746_D648_41CF_3273D0D19DF8",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B2D30CC_6746_D7CF_41D5_C618D3724CB0",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479, this.camera_797C7FA3_6746_AA79_41A3_49DE7BA8161B); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7CCB57E7_6668_90AF_41A5_674A1D6CE4CC",
   "pitch": -30.2,
   "yaw": 76.18,
   "distance": 100
  }
 ],
 "id": "overlay_7DF8F000_6669_6F61_41D0_7FB015A39E88",
 "enabledInCardboard": true
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044, this.camera_79776F93_6746_AA58_41D7_8B84D4DBFC91); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -92.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ]
   },
   "pitch": -30.2
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.05,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7CCB07E7_6668_90AF_41D5_E10247D6B25D",
   "pitch": -30.2,
   "yaw": -92.15,
   "distance": 100
  }
 ],
 "id": "overlay_7DF80000_6669_6F61_41C1_4A42980320B0",
 "enabledInCardboard": true
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7948EFC2_6746_AA3B_41D7_4E30B4CF3B1F",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_79209FE1_6746_A9F8_41C6_60D9F947D40B",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7AB27EF7_6746_ABD9_41D5_9A48F59472D5",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "movements": [
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_in"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "easing": "linear"
  },
  {
   "yawSpeed": 15.91,
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "easing": "cubic_out"
  }
 ],
 "id": "sequence_7B2A10BC_6746_D64F_41D3_3267B4F33A2F",
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarOpacity": 0.5,
 "visible": false,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "borderSize": 0,
 "paddingLeft": 40,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 40,
 "top": "0%",
 "minWidth": 1,
 "backgroundOpacity": 0.7,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_76BDEB09_652B_08A7_41BA_A054CE62A9C3",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 40,
 "propagateClick": true,
 "gap": 10,
 "paddingBottom": 40,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- EXPANDED"
 },
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "class": "Container",
 "horizontalAlign": "center",
 "right": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": 110,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "horizontal"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "children": [
  "this.IconButton_7E0019B1_6679_70A3_41C2_6666151FA64B",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "class": "Container",
 "horizontalAlign": "center",
 "right": "0%",
 "width": "91.304%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "85.959%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 3,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "vertical"
},
{
 "shadow": false,
 "maxHeight": 499,
 "id": "Image_76E601FC_652B_3B5D_41C2_F7F83760CA5C",
 "left": "0%",
 "width": "28%",
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_76E601FC_652B_3B5D_41C2_F7F83760CA5C.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "1.43%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "87.857%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image7072"
 },
 "maxWidth": 650
},
{
 "shadow": true,
 "scrollBarMargin": 2,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "class": "Container",
 "shadowColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "top": "10%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "10%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "class": "Container",
 "horizontalAlign": "right",
 "right": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 20,
 "top": "10%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "vertical"
},
{
 "shadow": true,
 "scrollBarMargin": 2,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "shadowColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "top": "10%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "10%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "class": "Container",
 "horizontalAlign": "right",
 "right": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 20,
 "top": "10%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "vertical"
},
{
 "scrollBarMargin": 2,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "class": "Container",
 "shadowColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "top": "10%",
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "10%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "class": "Container",
 "horizontalAlign": "right",
 "right": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 20,
 "top": "10%",
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingTop": 20,
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "vertical"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1C7544_6742_BE38_41C3_4A393F53BEE8",
 "levels": [
  {
   "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1C1544_6742_BE38_41CF_94557165565C",
 "levels": [
  {
   "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1CD544_6742_BE38_4191_79874F2DC29E",
 "levels": [
  {
   "url": "media/panorama_449688C3_66B9_90E7_41B5_ED7671A983C9_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1B2544_6742_BE38_41D6_AAD5380F9BA7",
 "levels": [
  {
   "url": "media/panorama_4496A28D_66B9_B363_41AD_B1B5D8E52374_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4684D825_6529_08EF_41B8_93680E7DC165",
 "levels": [
  {
   "url": "media/panorama_45DF830E_6529_18BD_41AD_5A3389C56533_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1BE544_6742_BE38_41CD_BBF9115AD95B",
 "levels": [
  {
   "url": "media/panorama_44A8AE84_66B9_B361_41D5_55C92F53C4FD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7E1D7544_6742_BE38_41AB_834876E001B5",
 "levels": [
  {
   "url": "media/panorama_44A2D565_66B9_71A3_41CF_701883B6CEB4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2D94E5_651B_196F_41C9_63F166ABE547",
 "levels": [
  {
   "url": "media/panorama_7A5233C3_652B_3FAB_41D3_F0BDE1D2A479_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7FD3B52F_674E_5E48_41D6_DD1B26A9E669",
 "levels": [
  {
   "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7FD2252F_674E_5E48_41BC_C6D90C1F26CF",
 "levels": [
  {
   "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7FD2552F_674E_5E48_41CD_5DDCEC4D4C35",
 "levels": [
  {
   "url": "media/panorama_44AE4C07_66B9_F76F_41AC_0266A985E78C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2CB4E5_651B_196F_41CD_74D944AC6CA4",
 "levels": [
  {
   "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2D44E5_651B_196F_41C1_D215FAF8374A",
 "levels": [
  {
   "url": "media/panorama_7A6DAAAD_652B_09FF_41A8_9761D78D7044_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7FD2C52F_674E_5E48_41CD_932D4BA2A69C",
 "levels": [
  {
   "url": "media/panorama_44A33704_66B9_9161_41CC_A0F55043A5A8_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2FA4D6_651B_19AD_41CD_37B42AE060B3",
 "levels": [
  {
   "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2C64D6_651B_19AD_419B_6CE41C1B75F4",
 "levels": [
  {
   "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2CD4D6_651B_19AD_41C8_C53887D9A1CE",
 "levels": [
  {
   "url": "media/panorama_7A53CEF5_6529_096F_41C3_92ED2D5254AC_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_4E2D04E5_651B_196F_41A7_5CBA8322F106",
 "levels": [
  {
   "url": "media/panorama_7A6DE79E_652B_07DD_41C3_EDA6F18CCA81_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CCB57E7_6668_90AF_41A5_674A1D6CE4CC",
 "levels": [
  {
   "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CCB07E7_6668_90AF_41D5_E10247D6B25D",
 "levels": [
  {
   "url": "media/panorama_7DF8A000_6669_6F61_41C8_3B68E6C98C50_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 300
  }
 ],
 "frameCount": 21
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "class": "Container",
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "backgroundOpacity": 0.4,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "40%",
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "bottom": "40%",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "children": [
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "25%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "25%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 },
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "right": "0%",
 "width": "100%",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "26.316%",
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "borderRadius": 0,
 "bottom": "0%",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "vertical"
},
{
 "shadow": false,
 "maxHeight": 499,
 "id": "Image_76BDEB09_652B_08A7_41BA_A054CE62A9C3",
 "left": "10.91%",
 "width": "75.909%",
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_76BDEB09_652B_08A7_41BA_A054CE62A9C3.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0.17%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "22.371%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image6894"
 },
 "maxWidth": 650
},
{
 "shadow": false,
 "maxHeight": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "class": "IconButton",
 "horizontalAlign": "center",
 "right": "7.85%",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 42,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "bottom": "0.36%",
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "maxWidth": 80
},
{
 "shadow": false,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 60,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "IconButton_7E0019B1_6679_70A3_41C2_6666151FA64B",
 "width": 40,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 0,
 "pressedIconURL": "skin/IconButton_7E0019B1_6679_70A3_41C2_6666151FA64B_pressed.png",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 0,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 40,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_7E0019B1_6679_70A3_41C2_6666151FA64B_rollover.png",
 "iconURL": "skin/IconButton_7E0019B1_6679_70A3_41C2_6666151FA64B.png",
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "Button34595"
 },
 "shadow": false,
 "cursor": "hand"
},
{
 "shadow": false,
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 58,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "propagateClick": true,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "class": "Container",
 "horizontalAlign": "center",
 "width": "85%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "width": "50%",
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 50,
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#0069A3",
 "paddingTop": 20,
 "propagateClick": false,
 "gap": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "vertical",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "shadow": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "insetBorder": false,
 "width": "100%",
 "class": "WebFrame",
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "height": "100%",
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "WebFrame48191"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "class": "Container",
 "horizontalAlign": "center",
 "width": "55%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "width": "45%",
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 60,
 "verticalAlign": "top",
 "minWidth": 460,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#0069A3",
 "paddingTop": 20,
 "propagateClick": false,
 "gap": 0,
 "paddingBottom": 20,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "scrollBarOpacity": 0.51,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "vertical",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "minHeight": 50,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "transparencyActive": false,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "propagateClick": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 1,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "width": "100%",
 "class": "Button",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "height": 50,
 "backgroundOpacity": 0,
 "fontSize": 18,
 "iconHeight": 32,
 "borderRadius": 0,
 "label": "Location",
 "shadowSpread": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "pressedBackgroundOpacity": 1,
 "pressedLabel": "Location",
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "iconWidth": 32,
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 1,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "gap": 5,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "width": "100%",
 "class": "Button",
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "paddingLeft": 10,
 "shadowBlurRadius": 6,
 "minHeight": 1,
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconBeforeLabel": true,
 "mode": "push",
 "height": 50,
 "backgroundOpacity": 0,
 "fontSize": 18,
 "iconHeight": 32,
 "borderRadius": 0,
 "label": "Contact Information",
 "shadowSpread": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "textDecoration": "none",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "iconWidth": 32,
 "cursor": "hand",
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 1,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "absolute",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 2,
 "paddingTop": 0,
 "propagateClick": true,
 "backgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "class": "HTMLText",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": 78,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>JasaVR - contoh hotel</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.websitehotel.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>ini@emailhotelnya.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: 123 456789</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "shadow": false,
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "class": "Container",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 50,
 "paddingTop": 20,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 300,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#E73B2C",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "vertical",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 30,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "maxWidth": 2000
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "class": "Container",
 "horizontalAlign": "right",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 20,
 "propagateClick": false,
 "gap": 0,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#E73B2C",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "scrollBarOpacity": 0.79,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "vertical",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "verticalAlign": "top",
 "minWidth": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "height": 40,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container space"
 },
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "class": "HTMLText",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 10,
 "minWidth": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.98vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.66vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.49vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.82vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "shadow": false,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "class": "Button",
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "backgroundColor": [
  "#04A3E1"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 1,
 "iconHeight": 32,
 "borderRadius": 50,
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "shadowSpread": 1,
 "height": 50,
 "paddingTop": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "gap": 5,
 "textDecoration": "none",
 "data": {
  "name": "Button31015"
 },
 "iconWidth": 32,
 "cursor": "hand",
 "fontWeight": "bold",
 "backgroundColorDirection": "vertical"
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "class": "HTMLText",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "height": "46%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.46vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarOpacity": 0,
 "shadow": false,
 "scrollBarVisible": "rollOver"
},
{
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "class": "Container",
 "horizontalAlign": "left",
 "width": "100%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": false,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "class": "Image",
 "horizontalAlign": "left",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "class": "HTMLText",
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderSize": 0,
 "paddingRight": 10,
 "minWidth": 1,
 "height": "100%",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0,
 "propagateClick": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.49vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.49vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.66vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.66vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarVisible": "rollOver"
}],
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "propagateClick": true,
 "gap": 10,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "desktopMipmappingEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "vrPolyfillScale": 1
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
