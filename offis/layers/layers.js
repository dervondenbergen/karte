var baseLayer = new ol.layer.Tile({title: 'Stamen watercolor', source: new ol.source.Stamen({layer: 'watercolor'})});
var lyr_Carsharing = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_Carsharing}), 
                style: style_Carsharing,
                title: "Carsharing"
            });
var lyr_WienerLinienHaltestellen = new ol.layer.Vector({
                source: new ol.source.GeoJSON({object: geojson_WienerLinienHaltestellen}), 
                style: style_WienerLinienHaltestellen,
                title: "Wiener Linien Haltestellen"
            });

lyr_Carsharing.setVisible(true);
lyr_WienerLinienHaltestellen.setVisible(true);
var layersList = [baseLayer,lyr_Carsharing,lyr_WienerLinienHaltestellen];