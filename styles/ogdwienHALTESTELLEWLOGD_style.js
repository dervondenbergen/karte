
                    var styleCache_ogdwienHALTESTELLEWLOGD={}
                    var style_ogdwienHALTESTELLEWLOGD = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(138,166,107,1.0)"})})
                        })
                        ];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_ogdwienHALTESTELLEWLOGD[key]){
                            var text = new ol.style.Text({
                                  font: 'Nonepx Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(None, None, None, 255)"
                                  }),
                                });
                            styleCache_ogdwienHALTESTELLEWLOGD[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_ogdwienHALTESTELLEWLOGD[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };