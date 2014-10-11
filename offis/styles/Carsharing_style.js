
                    var styleCache_Carsharing={}
                    var style_Carsharing = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 3, stroke: new ol.style.Stroke({color: 'rgba(0,0,0,255)', lineDash: null, width: 1}), fill: new ol.style.Fill({color: "rgba(212,93,68,1.0)"})})
                        })
                        ];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_Carsharing[key]){
                            var text = new ol.style.Text({
                                  font: '13.0px Calibri,sans-serif',
                                  text: labelText,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_Carsharing[key] = new ol.style.Style({"text": text});
                        }
                        var allStyles = [styleCache_Carsharing[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };