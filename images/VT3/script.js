(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Image_65D31458_771B_688A_41BC_3D5775092D71"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.83,
 "layout": "absolute",
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init()",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.3,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33062541_268E_7BE1_41C3_419E9BEBAABD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.25,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_339513FD_268E_7EA1_41B6_B4B1CA869018",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -120.48,
   "backwardYaw": 121.3,
   "distance": 1,
   "panorama": "this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.8,
   "backwardYaw": 82.84,
   "distance": 1,
   "panorama": "this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (2)",
 "id": "panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436",
 "thumbnailUrl": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29CC34AA_2692_1AA0_41B2_DC8BC1596E64",
  "this.overlay_37FDEDF4_268E_0AA7_41B1_8F361F02462F",
  "this.overlay_37717648_2692_39E0_4193_9FDB89665821",
  "this.overlay_34140952_26FE_0BE0_41B8_069DE3E154F5",
  "this.overlay_3425BF7E_26FE_07A0_41BC_DC3AA35E6E2F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.93,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_336434F5_268E_7AA1_41A6_49D35CCBBDD9",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 93.07,
   "backwardYaw": -119.66,
   "distance": 1,
   "panorama": "this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 63.2,
   "backwardYaw": 168.75,
   "distance": 1,
   "panorama": "this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5"
  }
 ],
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (6)",
 "id": "panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F",
 "thumbnailUrl": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/f/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/u/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/r/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/b/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/d/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "rowCount": 7,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/l/0/{row}_{column}.jpg",
      "colCount": 7,
      "height": 3584
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2826DEEF_269E_06BF_41A7_2F5AB70F797A",
  "this.overlay_37851DEC_2692_0AA0_41C1_81A005950E43",
  "this.overlay_32270DE0_2692_0ADF_41C0_094827A17B1C",
  "this.overlay_34B866BD_26FE_06A0_41C2_331BD36527DF",
  "this.overlay_34139BF3_26F2_0EA1_41B4_1B5D997D1A06"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.34,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_338283D4_268E_7EE7_4195_2C538418A448",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.52,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3353B4CA_268E_7AE3_41C0_6EB872DB641C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -49.3,
   "backwardYaw": 80.39,
   "distance": 1,
   "panorama": "this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 121.3,
   "backwardYaw": -120.48,
   "distance": 1,
   "panorama": "this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -119.66,
   "backwardYaw": 93.07,
   "distance": 1,
   "panorama": "this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (3)",
 "id": "panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB",
 "thumbnailUrl": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_2BD11A1D_2692_0960_41C0_7364C105C32C",
  "this.overlay_28D58E23_269E_09A1_419D_016F3CB51327",
  "this.overlay_367FB1E4_26B2_1AA0_41C2_EFCB95F62A7A",
  "this.overlay_374FDA56_2692_09E0_41B4_73B9C3811A95",
  "this.overlay_34099C5A_26FE_09E0_4156_4D1B6F5B576F",
  "this.overlay_3486D3FB_26FE_FEA0_41AE_3340B3CF61B4",
  "this.overlay_35195F5E_26FE_07E3_41C1_411E9F336971"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.07,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3316C55B_268E_7BE1_41C1_3941ACE309E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 55.84,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_3326C56F_268E_7BA0_41A3_D51533B1134A",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 157.3,
   "backwardYaw": -86.93,
   "distance": 1,
   "panorama": "this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -13.7,
   "backwardYaw": -124.16,
   "distance": 1,
   "panorama": "this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (4)",
 "id": "panorama_2CB377CA_268E_06E3_41BC_87069713D39D",
 "thumbnailUrl": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_36B61FDB_26BE_06E1_4185_DF8AD31BE1DB",
  "this.overlay_36C0AD10_26BE_0B7F_41B2_191E0EF28860",
  "this.overlay_34AB9D10_2692_0B60_41AE_55A408A64035",
  "this.overlay_351106BB_26F2_06A0_41C0_79AB8ED9F1C6",
  "this.overlay_341E0D7C_26F2_0BA0_41BF_120A3FAD574B"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5",
   "camera": "this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_334264A1_268E_7AA1_4185_BE9883D1CCD6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -116.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33B05478_268E_79AF_41B5_E7164D5DAB5A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_338B23AB_268E_7EA1_41C0_FDDAEAB25A9C",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -86.93,
   "backwardYaw": 157.3,
   "distance": 1,
   "panorama": "this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.39,
   "backwardYaw": -49.3,
   "distance": 1,
   "panorama": "this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 168.75,
   "backwardYaw": 63.2,
   "distance": 1,
   "panorama": "this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F"
  }
 ],
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (7)",
 "id": "panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5",
 "thumbnailUrl": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "rowCount": 8,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "height": 4096
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_363E6CBB_26B2_0AA0_41A2_02F278CBAF92",
  "this.overlay_37BC1365_2696_1FA0_41A4_22BB80AD30D8",
  "this.overlay_37F38585_2692_1B60_419B_E0C591A960A6",
  "this.overlay_374F8687_2692_F960_41A4_018DC7DC491E",
  "this.overlay_342898A6_26F2_0AA3_41A5_79A6D5AF0E87",
  "this.overlay_35DA7869_26F2_09A1_4189_09A4ADC0041A",
  "this.overlay_35F49D36_26F2_0BA0_41C0_9B9DAB93A356"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33F4D380_268E_7F5F_41BB_CD8775D681CB",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (5)",
 "id": "panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3",
 "thumbnailUrl": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_291FEC82_268E_0963_41B7_DF2DE43CA728",
  "this.overlay_340D2E0F_26FE_0960_41C3_1A1B74105AAD"
 ]
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33AAC426_268E_79A3_41BB_A07CAF486945",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.84,
   "backwardYaw": 53.8,
   "distance": 1,
   "panorama": "this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -124.16,
   "backwardYaw": -13.7,
   "distance": 1,
   "panorama": "this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "label": "Suroboyo Park 20 Jan 2024 (1)",
 "id": "panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6",
 "thumbnailUrl": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_29933364_2691_FFA0_41B5_8C720A61E780",
  "this.overlay_29FFDD82_2692_0B60_41BB_37F6F0F81869",
  "this.overlay_3731A95F_269E_0BE0_41A0_E3B4238830A5",
  "this.overlay_374C8ACA_2692_0EE3_41B5_B6048F441C3D",
  "this.overlay_34235898_268E_096F_41BF_39D2BAF32B5E",
  "this.overlay_3727BEB8_26F2_06A0_41C2_CA4B5B9E9AC0",
  "this.overlay_33EE40D0_26F6_3AE0_41B5_80CEDF443262"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.2,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33746518_268E_7B6F_41B1_A42880ACF6A5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.7,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_33BD044F_268E_79E1_41B7_4102412455CB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CB377CA_268E_06E3_41BC_87069713D39D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_camera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderSize": 0,
 "minHeight": 50,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "transitionMode": "blending",
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 256,
 "maxWidth": 500,
 "id": "Image_65D31458_771B_688A_41BC_3D5775092D71",
 "left": "3.62%",
 "shadow": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "url": "skin/Image_65D31458_771B_688A_41BC_3D5775092D71.png",
 "minHeight": 1,
 "top": "6.63%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "width": "16.304%",
 "paddingTop": 0,
 "click": "this.openLink('https://jasavr.com', '_blank')",
 "borderRadius": 0,
 "height": "13.433%",
 "paddingBottom": 0,
 "data": {
  "name": "Image13846"
 },
 "propagateClick": false,
 "cursor": "hand",
 "class": "Image"
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6, this.camera_338B23AB_268E_7EA1_41C0_FDDAEAB25A9C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35D9741D_26B2_7960_41C1_EABCDC8D3B72",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.8,
   "distance": 100
  }
 ],
 "id": "overlay_29CC34AA_2692_1AA0_41B2_DC8BC1596E64",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": 53.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB, this.camera_33F4D380_268E_7F5F_41BB_CD8775D681CB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_34DEECD1_2692_0AE0_41B5_E8A61F2700E1",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -120.48,
   "distance": 100
  }
 ],
 "id": "overlay_37FDEDF4_268E_0AA7_41B1_8F361F02462F",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -120.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_37717648_2692_39E0_4193_9FDB89665821",
 "bleachingDistance": 0.4,
 "pitch": 58.5,
 "bleaching": 0.7,
 "yaw": 134.59
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_2_0.png",
      "width": 317,
      "height": 142
     }
    ]
   },
   "pitch": -23.8,
   "yaw": -121.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_34140952_26FE_0BE0_41B8_069DE3E154F5",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.08,
   "yaw": -121.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_2_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -23.8
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_3_0.png",
      "width": 317,
      "height": 142
     }
    ]
   },
   "pitch": -23.4,
   "yaw": 53.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3425BF7E_26FE_07A0_41BC_DC3AA35E6E2F",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.12,
   "yaw": 53.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_3_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -23.4
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB, this.camera_338283D4_268E_7EE7_4195_2C538418A448); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.12,
   "image": "this.AnimatedImageResource_33B9F051_2696_19E1_41BB_0C0761D33AF2",
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.07,
   "distance": 100
  }
 ],
 "id": "overlay_2826DEEF_269E_06BF_41A7_2F5AB70F797A",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.12,
   "yaw": 93.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5, this.camera_339513FD_268E_7EA1_41B6_B4B1CA869018); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.12,
   "image": "this.AnimatedImageResource_33B9B051_2696_19E1_41A2_4A918F8D528C",
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63.2,
   "distance": 100
  }
 ],
 "id": "overlay_37851DEC_2692_0AA0_41C1_81A005950E43",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.12,
   "yaw": 63.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_32270DE0_2692_0ADF_41C0_094827A17B1C",
 "bleachingDistance": 0.4,
 "pitch": 60.55,
 "bleaching": 0.7,
 "yaw": 148.91
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_2_0.png",
      "width": 397,
      "height": 178
     }
    ]
   },
   "pitch": -32.81,
   "yaw": 92.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_34B866BD_26FE_06A0_41C2_331BD36527DF",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.03,
   "yaw": 92.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_2_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -32.81
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_3_0.png",
      "width": 397,
      "height": 178
     }
    ]
   },
   "pitch": -33.22,
   "yaw": 63.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_34139BF3_26F2_0EA1_41B4_1B5D997D1A06",
 "data": {
  "label": "70 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.98,
   "yaw": 63.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_3_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -33.22
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5, this.camera_334264A1_268E_7AA1_4185_BE9883D1CCD6); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35D9C41E_26B2_7963_419A_D1A77F646C4E",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.3,
   "distance": 100
  }
 ],
 "id": "overlay_2BD11A1D_2692_0960_41C0_7364C105C32C",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -49.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F, this.camera_336434F5_268E_7AA1_41A6_49D35CCBBDD9); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35D9A41E_26B2_7963_41B0_C0539F6F4B5F",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -119.66,
   "distance": 100
  }
 ],
 "id": "overlay_28D58E23_269E_09A1_419D_016F3CB51327",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -119.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436, this.camera_3353B4CA_268E_7AE3_41C0_6EB872DB641C); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_36E356AD_268E_06A0_41B2_D1768DF2528F",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 121.3,
   "distance": 100
  }
 ],
 "id": "overlay_367FB1E4_26B2_1AA0_41C2_EFCB95F62A7A",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": 121.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_374FDA56_2692_09E0_41B4_73B9C3811A95",
 "bleachingDistance": 0.4,
 "pitch": 60.95,
 "bleaching": 0.7,
 "yaw": 121.09
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_3_0.png",
      "width": 316,
      "height": 142
     }
    ]
   },
   "pitch": -24.55,
   "yaw": -49.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_34099C5A_26FE_09E0_4156_4D1B6F5B576F",
 "data": {
  "label": "70 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.97,
   "yaw": -49.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_3_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_4_0.png",
      "width": 316,
      "height": 143
     }
    ]
   },
   "pitch": -24.57,
   "yaw": -120.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3486D3FB_26FE_FEA0_41AE_3340B3CF61B4",
 "data": {
  "label": "50 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.96,
   "yaw": -120.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_4_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.57
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_5_0.png",
      "width": 316,
      "height": 142
     }
    ]
   },
   "pitch": -24.63,
   "yaw": 121.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_35195F5E_26FE_07E3_41C1_411E9F336971",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.96,
   "yaw": 121.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_5_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5, this.camera_3316C55B_268E_7BE1_41C1_3941ACE309E8); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35EA27D4_26B2_06E0_41C1_8B301995E3DB",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.3,
   "distance": 100
  }
 ],
 "id": "overlay_36B61FDB_26BE_06E1_4185_DF8AD31BE1DB",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": 157.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6, this.camera_3326C56F_268E_7BA0_41A3_D51533B1134A); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35EA77D5_26B2_06E0_41A0_53919C0833D9",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -13.7,
   "distance": 100
  }
 ],
 "id": "overlay_36C0AD10_26BE_0B7F_41B2_191E0EF28860",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -13.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_34AB9D10_2692_0B60_41AE_55A408A64035",
 "bleachingDistance": 0.4,
 "pitch": 61.77,
 "bleaching": 0.7,
 "yaw": 97.36
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_2_0.png",
      "width": 316,
      "height": 141
     }
    ]
   },
   "pitch": -24.3,
   "yaw": 157.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_351106BB_26F2_06A0_41C0_79AB8ED9F1C6",
 "data": {
  "label": "70 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.99,
   "yaw": 157.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_2_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.3
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_3_0.png",
      "width": 316,
      "height": 142
     }
    ]
   },
   "pitch": -24.63,
   "yaw": -14.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_341E0D7C_26F2_0BA0_41BF_120A3FAD574B",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.96,
   "yaw": -14.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_3_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D, this.camera_33AAC426_268E_79A3_41BB_A07CAF486945); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_36BA0F0F_26B6_0760_41BC_A4DBBD9F453C",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.93,
   "distance": 100
  }
 ],
 "id": "overlay_363E6CBB_26B2_0AA0_41A2_02F278CBAF92",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.35,
   "yaw": -86.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB, this.camera_33BD044F_268E_79E1_41B7_4102412455CB); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_367CC6C1_2696_06E1_4198_BB8F7FFAEECE",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.39,
   "distance": 100
  }
 ],
 "id": "overlay_37BC1365_2696_1FA0_41A4_22BB80AD30D8",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.35,
   "yaw": 80.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F, this.camera_33B05478_268E_79AF_41B5_E7164D5DAB5A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.35,
   "image": "this.AnimatedImageResource_37993CEC_269E_0AA0_4193_17B3C10EC5DE",
   "pitch": -30.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.75,
   "distance": 100
  }
 ],
 "id": "overlay_37F38585_2692_1B60_419B_E0C591A960A6",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.35,
   "yaw": 168.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -30.68
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_374F8687_2692_F960_41A4_018DC7DC491E",
 "bleachingDistance": 0.4,
 "pitch": 64.23,
 "bleaching": 0.7,
 "yaw": 60.55
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_3_0.png",
      "width": 477,
      "height": 214
     }
    ]
   },
   "pitch": -36.9,
   "yaw": -86.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_342898A6_26F2_0AA3_41A5_79A6D5AF0E87",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.45,
   "yaw": -86.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_3_0_map.gif",
      "width": 35,
      "height": 15
     }
    ]
   },
   "pitch": -36.9
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_4_0.png",
      "width": 477,
      "height": 214
     }
    ]
   },
   "pitch": -36.9,
   "yaw": 79.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_35DA7869_26F2_09A1_4189_09A4ADC0041A",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.45,
   "yaw": 79.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_4_0_map.gif",
      "width": 35,
      "height": 15
     }
    ]
   },
   "pitch": -36.9
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_5_0.png",
      "width": 477,
      "height": 214
     }
    ]
   },
   "pitch": -37.31,
   "yaw": 167.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_35F49D36_26F2_0BA0_41C0_9B9DAB93A356",
 "data": {
  "label": "50 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.39,
   "yaw": 167.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_5_0_map.gif",
      "width": 35,
      "height": 15
     }
    ]
   },
   "pitch": -37.31
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35EAA7D5_26B2_06E0_41B2_D2268AEC980E",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.07,
   "distance": 100
  }
 ],
 "id": "overlay_291FEC82_268E_0963_41B7_DF2DE43CA728",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -84.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0_HS_1_0.png",
      "width": 317,
      "height": 142
     }
    ]
   },
   "pitch": -24.63,
   "yaw": -84.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_340D2E0F_26FE_0960_41C3_1A1B74105AAD",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13,
   "yaw": -84.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0_HS_1_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.63
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436, this.camera_33746518_268E_7B6F_41B1_A42880ACF6A5); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_35D7A41B_26B2_7961_41AA_3DAD8D043678",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 82.84,
   "distance": 100
  }
 ],
 "id": "overlay_29933364_2691_FFA0_41B5_8C720A61E780",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": 82.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_34F66BFD_26F6_0EA1_418A_847B4E6D2E67",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 54.2,
   "distance": 100
  }
 ],
 "id": "overlay_29FFDD82_2692_0B60_41BB_37F6F0F81869",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": 54.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2CB377CA_268E_06E3_41BC_87069713D39D, this.camera_33062541_268E_7BE1_41C3_419E9BEBAABD); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_348737F0_2692_06A0_41BC_4098463E70AA",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -124.16,
   "distance": 100
  }
 ],
 "id": "overlay_3731A95F_269E_0BE0_41A0_E3B4238830A5",
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.35,
   "yaw": -124.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "class": "LensFlarePanoramaOverlay",
 "id": "overlay_374C8ACA_2692_0EE3_41B5_B6048F441C3D",
 "bleachingDistance": 0.4,
 "pitch": 56.86,
 "bleaching": 0.7,
 "yaw": 91.64
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_3_0.png",
      "width": 319,
      "height": 146
     }
    ]
   },
   "pitch": -23.08,
   "yaw": 83.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_34235898_268E_096F_41BF_39D2BAF32B5E",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.25,
   "yaw": 83.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_3_0_map.gif",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -23.08
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_4_0.png",
      "width": 318,
      "height": 144
     }
    ]
   },
   "pitch": -24.67,
   "yaw": -124.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3727BEB8_26F2_06A0_41C2_CA4B5B9E9AC0",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.01,
   "yaw": -124.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_4_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -24.67
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_5_0.png",
      "width": 318,
      "height": 144
     }
    ]
   },
   "pitch": -23.49,
   "yaw": 54.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_33EE40D0_26F6_3AE0_41B5_80CEDF443262",
 "data": {
  "label": "32 MP"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.21,
   "yaw": 54.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_5_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -23.49
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35D9741D_26B2_7960_41C1_EABCDC8D3B72",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_34DEECD1_2692_0AE0_41B5_E8A61F2700E1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CCF2BDF_268E_0EE0_41A4_3DF796C4E436_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_33B9F051_2696_19E1_41BB_0C0761D33AF2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_33B9B051_2696_19E1_41A2_4A918F8D528C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CE044A0_268E_1AA0_4191_009006B5AF8F_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35D9C41E_26B2_7963_419A_D1A77F646C4E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35D9A41E_26B2_7963_41B0_C0539F6F4B5F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_36E356AD_268E_06A0_41B2_D1768DF2528F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB351AC_268E_1AA0_41B3_33ECDA6C84FB_0_HS_2_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35EA27D4_26B2_06E0_41C1_8B301995E3DB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35EA77D5_26B2_06E0_41A0_53919C0833D9",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB377CA_268E_06E3_41BC_87069713D39D_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_36BA0F0F_26B6_0760_41BC_A4DBBD9F453C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_367CC6C1_2696_06E1_4198_BB8F7FFAEECE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_37993CEC_269E_0AA0_4193_17B3C10EC5DE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CD16ED5_268E_06E1_4193_CBFF8D53E9A5_0_HS_2_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35EAA7D5_26B2_06E0_41B2_D2268AEC980E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2CB35DCD_268E_0AE0_41A0_1E8B12863FC3_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_35D7A41B_26B2_7961_41AA_3DAD8D043678",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_0_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_34F66BFD_26F6_0EA1_418A_847B4E6D2E67",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_1_0.png",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_348737F0_2692_06A0_41BC_4098463E70AA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_2DA5E6D4_268E_06E0_41AD_1DFF95736BD6_0_HS_2_0.png",
   "width": 330,
   "height": 180
  }
 ]
}],
 "scripts": {
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "minHeight": 20,
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "paddingRight": 0,
 "minWidth": 20,
 "downloadEnabled": false,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible",
 "class": "Player"
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
