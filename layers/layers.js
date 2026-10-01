var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_1_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_2_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_2_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_2_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_2_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_2_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_2_6.png" /> ENTERRADA<br />\
    <img src="styles/legend/Cmara_2_7.png" /> NO INSPECCIONABLE<br />' });
var format_PrediodeInters_3 = new ol.format.GeoJSON();
var features_PrediodeInters_3 = format_PrediodeInters_3.readFeatures(json_PrediodeInters_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediodeInters_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediodeInters_3.addFeatures(features_PrediodeInters_3);
var lyr_PrediodeInters_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediodeInters_3, 
                style: style_PrediodeInters_3,
                popuplayertitle: 'Predio de Interés',
                interactive: false,
                title: '<img src="styles/legend/PrediodeInters_3.png" /> Predio de Interés'
            });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);lyr_PrediodeInters_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Levantamiento,lyr_PrediodeInters_3];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA HALLAZGO 1': 'FOTOGRAFIA HALLAZGO 1', 'FOTOGRAFIA HALLAZGO 2': 'FOTOGRAFIA HALLAZGO 2', 'TAPA METALICA': 'TAPA METALICA', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'PFODUNDIDAD FONDO (m)': 'PFODUNDIDAD FONDO (m)', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', 'E (m) SIRGAS 2025': 'E (m) SIRGAS 2025', 'N (m) SIRGAS 2025': 'N (m) SIRGAS 2025', 'COTA ANILLO (m) SIRGAS 2025': 'COTA ANILLO (m) SIRGAS 2025', 'COTA FONDO (m) SIRGAS 2025': 'COTA FONDO (m) SIRGAS 2025', });
lyr_PrediodeInters_3.set('fieldAliases', {'fid': 'fid', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA HALLAZGO 1': 'ExternalResource', 'FOTOGRAFIA HALLAZGO 2': 'ExternalResource', 'TAPA METALICA': 'CheckBox', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'PFODUNDIDAD FONDO (m)': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', 'E (m) SIRGAS 2025': 'TextEdit', 'N (m) SIRGAS 2025': 'TextEdit', 'COTA ANILLO (m) SIRGAS 2025': 'TextEdit', 'COTA FONDO (m) SIRGAS 2025': 'TextEdit', });
lyr_PrediodeInters_3.set('fieldImages', {'fid': '', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA HALLAZGO 1': 'inline label - visible with data', 'FOTOGRAFIA HALLAZGO 2': 'inline label - visible with data', 'TAPA METALICA': 'inline label - visible with data', 'E (m) RTK': 'inline label - visible with data', 'N (m) RTK': 'inline label - visible with data', 'COTA ANILLO (m) RTK': 'inline label - visible with data', 'PFODUNDIDAD FONDO (m)': 'hidden field', 'COTA FONDO (m) RTK': 'hidden field', 'E (m) SIRGAS 2025': 'inline label - visible with data', 'N (m) SIRGAS 2025': 'inline label - visible with data', 'COTA ANILLO (m) SIRGAS 2025': 'inline label - visible with data', 'COTA FONDO (m) SIRGAS 2025': 'hidden field', });
lyr_PrediodeInters_3.set('fieldLabels', {'fid': 'hidden field', });
lyr_PrediodeInters_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});