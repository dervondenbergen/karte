var baseLayer = new ol.layer.Tile({title: 'Stamen watercolor', source: new ol.source.Stamen({layer: 'watercolor'})});
var lyr_ogdwienHALTESTELLEWLOGD = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_ogdwienHALTESTELLEWLOGD}), 
                style: style_ogdwienHALTESTELLEWLOGD,
                title: "ogdwien:HALTESTELLEWLOGD"
            });

lyr_ogdwienHALTESTELLEWLOGD.setVisible(true);
var layersList = [baseLayer,lyr_ogdwienHALTESTELLEWLOGD];