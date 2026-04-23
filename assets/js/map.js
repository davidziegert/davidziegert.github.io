let map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
      className: "ol_bw",
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([12.974044771216583, 52.4076754192462]),
    zoom: 17,
  }),
  target: "map",
});
