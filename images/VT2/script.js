(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -140.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4B255A6_E254_16E1_41DC_34ED7767EAE9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.01,
 "hideDuration": 500,
 "yaw": 16.1,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.49,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "popupDistance": 100
},
{
 "items": [
  {
   "media": "this.panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_camera"
  },
  {
   "media": "this.panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_camera"
  },
  {
   "media": "this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_camera"
  },
  {
   "media": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_camera"
  },
  {
   "media": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50_camera"
  },
  {
   "media": "this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_camera"
  },
  {
   "media": "this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_camera"
  },
  {
   "media": "this.panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_camera"
  },
  {
   "media": "this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_camera"
  },
  {
   "media": "this.panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_camera"
  },
  {
   "media": "this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB",
   "camera": "this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 113.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F697E691_E254_12A0_41E3_960BCF63F952",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 62.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F68066CF_E254_12BF_41E1_0DC8CDFB73FA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -100.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F68986BF_E254_12DF_41C5_298FC529A9AB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -66.48,
   "backwardYaw": -160.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8",
   "distance": 1
  },
  {
   "yaw": -163.02,
   "backwardYaw": 9.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "9",
 "id": "panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25",
 "thumbnailUrl": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EF07EDFB_E254_1660_41E0_66A1E3BD9C52",
  "this.overlay_F3966FE1_E274_1263_41DB_50F9B06B331A",
  "this.overlay_F04F82CB_E274_72A7_41CA_397B807176C1",
  "this.overlay_F0F40CF1_E274_3663_41DE_5CC301D35029"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 163.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F401C50A_E254_17A1_41E9_E5C40A5AA427",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 14.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F6B0F633_E254_15E7_41BB_EB212FFB53EE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA736624_E164_C243_41D1_5C956E86CA50_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 19.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F6A4D671_E254_1263_41E0_7E90530C5099",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -176.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4CB9587_E254_16AF_41C1_27875ECF82A9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -5.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F76C26FE_E254_1261_4172_8BCE7A128DD3",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "50%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.03,
 "hideDuration": 500,
 "yaw": 11.27,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7",
 "class": "PopupPanoramaOverlay",
 "pitch": -4.32,
 "popupMaxHeight": "50%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 849
   }
  ]
 },
 "popupDistance": 0.25
},
{
 "id": "ImageResource_F49BC42A_E25C_35E1_41E1_92DB12D4FFFD",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 1131
  },
  {
   "url": "media/popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -170.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F6AEB642_E254_15A1_41E2_103980D08FBC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 174.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F77786EE_E254_1261_41D1_0DC9BE17B618",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -16.16,
   "backwardYaw": -165.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A"
  },
  {
   "yaw": 167.11,
   "backwardYaw": 9.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "7",
 "id": "panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61",
 "thumbnailUrl": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F201EB14_E254_F3A1_41CC_4AD1730AB23E",
  "this.overlay_F3FC4A83_E26C_12A7_41BA_34390C34E8FF",
  "this.overlay_F3F3C5C6_E26C_36A0_41E9_9481E029BE21",
  "this.overlay_F6A9D18B_E254_0EA7_41E5_2027C0E9139B",
  "this.popup_F755F454_E254_35A1_41E4_6B2171517E04"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 117.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F69176B0_E254_12E1_41E9_193BFA0E32B9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -75.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4F81539_E254_17E3_41E5_DFFAE1011D19",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4ECA548_E254_17A1_41D3_43889AC39958",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "80%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.87,
 "hideDuration": 500,
 "yaw": -104.91,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9",
 "class": "PopupPanoramaOverlay",
 "pitch": -14.13,
 "popupMaxHeight": "80%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 843
   }
  ]
 },
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "0",
 "id": "panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085",
 "thumbnailUrl": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EED4DE8F_E17C_C25D_41E8_314AFDCA2156",
  "this.overlay_F60FF7DA_E254_72A1_41A6_A0988F0CE6D1",
  "this.popup_F688F22D_E254_0DE3_4195_6E9314B54B63"
 ]
},
{
 "id": "ImageResource_F498C42A_E25C_35E1_41E7_6381A4582008",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C_0_0.jpg",
   "width": 1599,
   "class": "ImageResourceLevel",
   "height": 1131
  },
  {
   "url": "media/popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 724
  },
  {
   "url": "media/popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 362
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 9.2,
   "backwardYaw": -163.02,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25",
   "distance": 1
  },
  {
   "yaw": 79.98,
   "backwardYaw": -122.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50",
   "distance": 1
  },
  {
   "yaw": 174.48,
   "backwardYaw": 3.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4",
 "id": "panorama_EA70345C_E164_C6C3_41E8_F216F64D771A",
 "thumbnailUrl": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ED1CFEBD_E25C_32E3_41E3_B971D15DE27C",
  "this.overlay_F373D572_E25D_F661_41E7_C4CED6D721EF",
  "this.overlay_F3FA15EB_E25C_3667_41E4_CD49A9EE2D2C",
  "this.overlay_F697203B_E25C_0DE7_41C3_72B277104425",
  "this.popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 57.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4D7A577_E254_166F_41B2_1C464C83CBBA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -62.8,
   "backwardYaw": 104.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50",
   "distance": 1
  },
  {
   "yaw": -5.11,
   "backwardYaw": 179.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB",
 "thumbnailUrl": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F00386A8_E274_12E0_41EB_99A7D74EEC0D",
  "this.overlay_F0A13CFF_E274_365F_41BA_EBFF32C1D69C"
 ]
},
{
 "id": "ImageResource_F781E1E4_E25C_0E61_41D9_F33DF6057395",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 1318
  },
  {
   "url": "media/popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 843
  },
  {
   "url": "media/popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 421
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.03,
 "hideDuration": 500,
 "yaw": 26.53,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F688F22D_E254_0DE3_4195_6E9314B54B63",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.91,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F688F22D_E254_0DE3_4195_6E9314B54B63_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 536
   }
  ]
 },
 "popupDistance": 0.25
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -170.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F69F6681_E254_12A3_41E3_84C434335101",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -1.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F6AB7662_E254_1261_41CA_E34D86B482B7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "70%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.97,
 "hideDuration": 500,
 "yaw": -88.05,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C",
 "class": "PopupPanoramaOverlay",
 "pitch": -9.45,
 "popupMaxHeight": "70%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 724
   }
  ]
 },
 "popupDistance": 100
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.93,
 "hideDuration": 500,
 "yaw": -40.53,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_F755F454_E254_35A1_41E4_6B2171517E04",
 "class": "PopupPanoramaOverlay",
 "pitch": -11.2,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_F755F454_E254_35A1_41E4_6B2171517E04_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 723
   }
  ]
 },
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085"
  },
  {
   "yaw": -5.11,
   "backwardYaw": 178.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "1",
 "id": "panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2",
 "thumbnailUrl": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EE9B0355_E17C_42CD_41DA_0596CD03408B",
  "this.overlay_F194F5E3_E164_C1C5_41E8_91EA323B0B83"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 178.98,
   "backwardYaw": -5.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB"
  },
  {
   "yaw": 3.07,
   "backwardYaw": 174.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "2",
 "id": "panorama_EA70333F_E164_C2BD_41EB_42DCB794C320",
 "thumbnailUrl": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F19B57F9_E165_C1C5_41E4_C874FF3AD14E",
  "this.overlay_F04565C7_E164_41CD_41DB_E9E1A3931827",
  "this.overlay_EC623B6F_E254_127F_4185_CB230C20186E",
  "this.overlay_F6A35210_E254_0DA1_41D5_29014A834948",
  "this.popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.8,
   "backwardYaw": -5.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB",
   "distance": 1
  },
  {
   "yaw": -117.61,
   "backwardYaw": 39.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA736624_E164_C243_41D1_5C956E86CA50",
   "distance": 1
  },
  {
   "yaw": 9.2,
   "backwardYaw": 167.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "6",
 "id": "panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC",
 "thumbnailUrl": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F2C0426F_E254_327F_41D9_8E9BC0F8B9FD",
  "this.overlay_F34E6A54_E26C_1DA1_41E3_30E902CB2154",
  "this.overlay_F33B7B54_E26C_13A1_419F_45FED99930CA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": -12.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F6B46623_E254_15E7_41C3_82EDD26E048B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 104.11,
   "backwardYaw": -62.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB",
   "distance": 1
  },
  {
   "yaw": -122.11,
   "backwardYaw": 79.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A",
   "distance": 1
  },
  {
   "yaw": 39.89,
   "backwardYaw": -117.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "5",
 "id": "panorama_EA736624_E164_C243_41D1_5C956E86CA50",
 "thumbnailUrl": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_ED9038F8_E25C_3E61_41E9_DF70093C3E83",
  "this.overlay_EDB5CF22_E25C_33E1_4193_95E6E949CF2F",
  "this.overlay_F2CC319F_E25C_0EDF_41EB_F2364A12A083",
  "this.overlay_F6D5F429_E25C_15E3_41C6_6E8E1D4DF7C5",
  "this.overlay_F68969E2_E25C_1E61_41B0_C20BBE214CC8",
  "this.popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C",
  "this.popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 16.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4E3E558_E254_17A1_41D3_C142EB20AE20",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -160.57,
   "backwardYaw": -66.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "10",
 "id": "panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8",
 "thumbnailUrl": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EFBDBA4B_E257_FDA7_41EA_108CD572121E"
 ]
},
{
 "id": "ImageResource_F52D12D4_E254_12A1_41B4_E492D50B432A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 1327
  },
  {
   "url": "media/popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 849
  },
  {
   "url": "media/popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 424
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 174.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_F4BEA597_E254_16A0_41E6_C91C5530813C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_F40DF4CB_E254_16A7_41C0_F0E8C34A7670",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F755F454_E254_35A1_41E4_6B2171517E04_0_0.jpg",
   "width": 1600,
   "class": "ImageResourceLevel",
   "height": 1130
  },
  {
   "url": "media/popup_F755F454_E254_35A1_41E4_6B2171517E04_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 723
  },
  {
   "url": "media/popup_F755F454_E254_35A1_41E4_6B2171517E04_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 361
  }
 ]
},
{
 "id": "ImageResource_F45E4E68_E254_F261_41E5_7DBA56F38246",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_F688F22D_E254_0DE3_4195_6E9314B54B63_0_0.jpg",
   "width": 1420,
   "class": "ImageResourceLevel",
   "height": 744
  },
  {
   "url": "media/popup_F688F22D_E254_0DE3_4195_6E9314B54B63_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 536
  },
  {
   "url": "media/popup_F688F22D_E254_0DE3_4195_6E9314B54B63_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 268
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -165.48,
   "backwardYaw": -16.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61",
   "distance": 1
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "8",
 "id": "panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C",
 "thumbnailUrl": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_F2DC0478_E254_1661_41AE_921BA585C110"
 ]
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "minWidth": 100,
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
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
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 50,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "minWidth": 1,
 "id": "Image_65D31458_771B_688A_41BC_3D5775092D71",
 "left": "3.62%",
 "shadow": false,
 "horizontalAlign": "center",
 "class": "Image",
 "width": "16.304%",
 "borderSize": 0,
 "url": "skin/Image_65D31458_771B_688A_41BC_3D5775092D71.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "maxWidth": 500,
 "height": "13.433%",
 "top": "6.63%",
 "maxHeight": 256,
 "click": "this.openLink('https://jasavr.com', '_blank')",
 "paddingLeft": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "minHeight": 1,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Image13846"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "shadow": false,
 "class": "UIComponent",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "paddingRight": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingLeft": 0,
 "backgroundOpacity": 0.55,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent18888"
 }
},
{
 "backgroundColorRatios": [],
 "minWidth": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "shadow": false,
 "class": "ZoomImage",
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "bottom": 0,
 "paddingRight": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingLeft": 0,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "minHeight": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage18889"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton18890"
 },
 "minWidth": 0,
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "shadow": false,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "borderColor": "#000000",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "iconHeight": 20,
 "paddingLeft": 5,
 "backgroundOpacity": 0.3,
 "paddingTop": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "minHeight": 0,
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F02BF42B_E254_75E0_41E1_8BB704F8D9E8",
   "pitch": -30.68,
   "yaw": -66.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8, this.camera_F6A4D671_E254_1263_41E0_7E90530C5099); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EF07EDFB_E254_1660_41E0_66A1E3BD9C52",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -66.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F46EC7C3_E274_32A7_41EA_9A4C9CDC9AB2",
   "pitch": -30.68,
   "yaw": 99.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3966FE1_E274_1263_41DB_50F9B06B331A",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 99.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F46EB7C3_E274_32A7_41DF_54C7BD8E2353",
   "pitch": -30.68,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A, this.camera_F69F6681_E254_12A3_41E3_84C434335101); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F04F82CB_E274_72A7_41CA_397B807176C1",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F46907C3_E274_32A7_41E2_1F4FE0B65DAD",
   "pitch": -30.68,
   "yaw": 147.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0F40CF1_E274_3663_41DE_5CC301D35029",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 147.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F318A65F_E254_F25F_41E1_85C39CCEECB9",
   "pitch": -30.68,
   "yaw": -16.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C, this.camera_F6B0F633_E254_15E7_41BB_EB212FFB53EE); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F201EB14_E254_F3A1_41CC_4AD1730AB23E",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -16.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F4EDEF87_E26C_12A0_41BA_3E941384DC0F",
   "pitch": -30.68,
   "yaw": 167.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC, this.camera_F6AEB642_E254_15A1_41E2_103980D08FBC); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3FC4A83_E26C_12A7_41BA_34390C34E8FF",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 167.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F4EC2F87_E26C_12A0_41B7_B21207190996",
   "pitch": -30.68,
   "yaw": -155.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3F3C5C6_E26C_36A0_41E9_9481E029BE21",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -155.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "hfov": 5.93,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.2,
   "yaw": -40.53
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F755F454_E254_35A1_41E4_6B2171517E04, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F40DF4CB_E254_16A7_41C0_F0E8C34A7670, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F6A9D18B_E254_0EA7_41E5_2027C0E9139B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.93,
   "yaw": -40.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F754B642_E274_15A1_41EB_2CC239AFC2AE",
   "pitch": -30.68,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EED4DE8F_E17C_C25D_41E8_314AFDCA2156",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0_HS_1_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "hfov": 6.03,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.91,
   "yaw": 26.53
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F688F22D_E254_0DE3_4195_6E9314B54B63, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F45E4E68_E254_F261_41E5_7DBA56F38246, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F60FF7DA_E254_72A1_41A6_A0988F0CE6D1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 26.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F31EC65F_E254_F25F_41CF_154F7CAAB91E",
   "pitch": -30.68,
   "yaw": 9.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25, this.camera_F4E3E558_E254_17A1_41D3_C142EB20AE20); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ED1CFEBD_E25C_32E3_41E3_B971D15DE27C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F319665F_E254_F25F_41E9_E7B9AC186A20",
   "pitch": -30.68,
   "yaw": 79.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA736624_E164_C243_41D1_5C956E86CA50, this.camera_F4D7A577_E254_166F_41B2_1C464C83CBBA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F373D572_E25D_F661_41E7_C4CED6D721EF",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 79.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F319065F_E254_F25F_41E3_71217101B2B6",
   "pitch": -30.68,
   "yaw": 174.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320, this.camera_F4CB9587_E254_16AF_41C1_27875ECF82A9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F3FA15EB_E25C_3667_41E4_CD49A9EE2D2C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 174.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "hfov": 5.87,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -14.13,
   "yaw": -104.91
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F77FA2AD_E25C_12E3_41CA_06A28A6E01A9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F781E1E4_E25C_0E61_41D9_F33DF6057395, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F697203B_E25C_0DE7_41C3_72B277104425",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.87,
   "yaw": -104.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F73ED1F2_E27C_0E61_41E8_731959B326D9",
   "pitch": -30.68,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC, this.camera_F4ECA548_E254_17A1_41D3_43889AC39958); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F00386A8_E274_12E0_41EB_99A7D74EEC0D",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F73F61F2_E27C_0E61_41E8_B861A0841DF6",
   "pitch": -30.68,
   "yaw": -62.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA736624_E164_C243_41D1_5C956E86CA50, this.camera_F4F81539_E254_17E3_41E5_DFFAE1011D19); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F0A13CFF_E274_365F_41BA_EBFF32C1D69C",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -62.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F34C16F9_E16D_C3C5_41C8_52BD148B9A83",
   "pitch": -30.68,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA70333F_E164_C2BD_41EB_42DCB794C320, this.camera_F6AB7662_E254_1261_41CA_E34D86B482B7); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EE9B0355_E17C_42CD_41DA_0596CD03408B",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -5.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F34DA6F9_E16D_C3C5_41E8_F25C9A36B64F",
   "pitch": -30.68,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F194F5E3_E164_C1C5_41E8_91EA323B0B83",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F34D66F9_E16D_C3C5_41B2_75CDBC08DC3F",
   "pitch": -30.68,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2, this.camera_F77786EE_E254_1261_41D1_0DC9BE17B618); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F19B57F9_E165_C1C5_41E4_C874FF3AD14E",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F34D26F9_E16D_C3C5_41C2_BAD0EB2366A6",
   "pitch": -30.68,
   "yaw": 60.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F04565C7_E164_41CD_41DB_E9E1A3931827",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 60.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F02C442B_E254_75E0_41DE_63344B0706A2",
   "pitch": -30.68,
   "yaw": 3.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A, this.camera_F76C26FE_E254_1261_4172_8BCE7A128DD3); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EC623B6F_E254_127F_4185_CB230C20186E",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 3.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_3_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "hfov": 6.03,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.32,
   "yaw": 11.27
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F7C33FDD_E254_32A3_41AA_D88E9B3664D7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F52D12D4_E254_12A1_41B4_E492D50B432A, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F6A35210_E254_0DA1_41D5_29014A834948",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 11.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F4EE9F87_E26C_12A0_41B6_7B04EAC3733F",
   "pitch": -30.68,
   "yaw": 9.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61, this.camera_F6B46623_E254_15E7_41C3_82EDD26E048B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2C0426F_E254_327F_41D9_8E9BC0F8B9FD",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F4EEEF87_E26C_12A0_41DF_4AF9252692B8",
   "pitch": -30.68,
   "yaw": 179.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB, this.camera_F4BEA597_E254_16A0_41E6_C91C5530813C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F34E6A54_E26C_1DA1_41E3_30E902CB2154",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 179.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F4ED4F87_E26C_12A0_41E0_8448D0BAAFDC",
   "pitch": -30.68,
   "yaw": -117.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA736624_E164_C243_41D1_5C956E86CA50, this.camera_F4B255A6_E254_16E1_41DC_34ED7767EAE9); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F33B7B54_E26C_13A1_419F_45FED99930CA",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -117.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F73AB1F2_E27C_0E61_41EB_2399D16E94A0",
   "pitch": -30.68,
   "yaw": 39.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC, this.camera_F68066CF_E254_12BF_41E1_0DC8CDFB73FA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ED9038F8_E25C_3E61_41E9_DF70093C3E83",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 39.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F318565F_E254_F25F_41CA_664D211E676D",
   "pitch": -30.68,
   "yaw": 104.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB, this.camera_F69176B0_E254_12E1_41E9_193BFA0E32B9); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EDB5CF22_E25C_33E1_4193_95E6E949CF2F",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": 104.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F73BE1F2_E27C_0E61_41B3_149AE9EF342A",
   "pitch": -30.68,
   "yaw": -122.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA70345C_E164_C6C3_41E8_F216F64D771A, this.camera_F68986BF_E254_12DF_41C5_298FC529A9AB); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2CC319F_E25C_0EDF_41EB_F2364A12A083",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -122.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_3_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "hfov": 6.01,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.49,
   "yaw": 16.1
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F7C7CE75_E25C_1263_41C1_31BAD64DF8F0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F49BC42A_E25C_35E1_41E1_92DB12D4FFFD, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F6D5F429_E25C_15E3_41C6_6E8E1D4DF7C5",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.01,
   "yaw": 16.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_4_0.png",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "hfov": 5.97,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.45,
   "yaw": -88.05
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_F7BACA57_E25C_1DAF_41C4_1FE0EE908B5C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'paddingLeft':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_F498C42A_E25C_35E1_41E7_6381A4582008, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F68969E2_E25C_1E61_41B0_C20BBE214CC8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.97,
   "yaw": -88.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F02B743A_E254_75E1_41E2_399818A9C104",
   "pitch": -30.68,
   "yaw": -160.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25, this.camera_F697E691_E254_12A0_41E3_960BCF63F952); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_EFBDBA4B_E257_FDA7_41EA_108CD572121E",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -160.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_F31B765F_E254_F25F_41E4_F165E074AE17",
   "pitch": -30.68,
   "yaw": -165.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61, this.camera_F401C50A_E254_17A1_41E9_E5C40A5AA427); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_F2DC0478_E254_1661_41AE_921BA585C110",
 "data": {
  "label": "Arrow 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.35,
   "yaw": -165.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F02BF42B_E254_75E0_41E1_8BB704F8D9E8",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F46EC7C3_E274_32A7_41EA_9A4C9CDC9AB2",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F46EB7C3_E274_32A7_41DF_54C7BD8E2353",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F46907C3_E274_32A7_41E2_1F4FE0B65DAD",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA59ADCA_E164_41C7_41E6_26C4B4F5BF25_0_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F318A65F_E254_F25F_41E1_85C39CCEECB9",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F4EDEF87_E26C_12A0_41BA_3E941384DC0F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F4EC2F87_E26C_12A0_41B7_B21207190996",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA548DFC_E164_41BC_41E9_0FF90EB5BE61_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F754B642_E274_15A1_41EB_2CC239AFC2AE",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA8AC675_E164_42CD_41D9_CDF2371C5085_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F31EC65F_E254_F25F_41CF_154F7CAAB91E",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F319665F_E254_F25F_41E9_E7B9AC186A20",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F319065F_E254_F25F_41E3_71217101B2B6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70345C_E164_C6C3_41E8_F216F64D771A_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F73ED1F2_E27C_0E61_41E8_731959B326D9",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F73F61F2_E27C_0E61_41E8_B861A0841DF6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA5AE99E_E165_CE7C_41D1_C21D277316FB_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F34C16F9_E16D_C3C5_41C8_52BD148B9A83",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F34DA6F9_E16D_C3C5_41E8_F25C9A36B64F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA740114_E164_5E43_41E4_F58EF3ED65A2_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F34D66F9_E16D_C3C5_41B2_75CDBC08DC3F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F34D26F9_E16D_C3C5_41C2_BAD0EB2366A6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F02C442B_E254_75E0_41DE_63344B0706A2",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA70333F_E164_C2BD_41EB_42DCB794C320_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F4EE9F87_E26C_12A0_41B6_7B04EAC3733F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F4EEEF87_E26C_12A0_41DF_4AF9252692B8",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F4ED4F87_E26C_12A0_41E0_8448D0BAAFDC",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA4698EF_E164_CFDD_41C1_B8B9E75E6BCC_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F73AB1F2_E27C_0E61_41EB_2399D16E94A0",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F318565F_E254_F25F_41CA_664D211E676D",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F73BE1F2_E27C_0E61_41B3_149AE9EF342A",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA736624_E164_C243_41D1_5C956E86CA50_0_HS_2_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F02B743A_E254_75E1_41E2_399818A9C104",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA56F76D_E165_C2DD_41D8_F3C4F873D1E8_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_F31B765F_E254_F25F_41E4_F165E074AE17",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_EA5B15CC_E164_41C3_41DE_57AD61AE1E6C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
}],
 "start": "this.init()",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Image_65D31458_771B_688A_41BC_3D5775092D71",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "minWidth": 20,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "vrPolyfillScale": 0.83,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "scripts": {
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingLeft": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "minHeight": 20,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
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
