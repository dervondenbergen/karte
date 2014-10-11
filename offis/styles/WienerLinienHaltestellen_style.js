
                    var styleCache_WienerLinienHaltestellen={}
                    var style_WienerLinienHaltestellen = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(6,171,72,1.0)"})})
                        })
                        ];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_WienerLinienHaltestellen[key]){
                            var text = new ol.style.Text({
                                  font: '13.0px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_WienerLinienHaltestellen[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_WienerLinienHaltestellen[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };