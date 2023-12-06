var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5130_1 = new ol.format.GeoJSON();
var features_5130_1 = format_5130_1.readFeatures(json_5130_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5130_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5130_1.addFeatures(features_5130_1);
var lyr_5130_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5130_1, 
                style: style_5130_1,
                interactive: true,
                title: '<img src="styles/legend/5130_1.png" /> 5130'
            });
var format_4107_2 = new ol.format.GeoJSON();
var features_4107_2 = format_4107_2.readFeatures(json_4107_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_2.addFeatures(features_4107_2);
var lyr_4107_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_2, 
                style: style_4107_2,
                interactive: true,
                title: '<img src="styles/legend/4107_2.png" /> 4107'
            });
var format_2320_3 = new ol.format.GeoJSON();
var features_2320_3 = format_2320_3.readFeatures(json_2320_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_3.addFeatures(features_2320_3);
var lyr_2320_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_3, 
                style: style_2320_3,
                interactive: true,
                title: '<img src="styles/legend/2320_3.png" /> 2320'
            });
var format_2310_4 = new ol.format.GeoJSON();
var features_2310_4 = format_2310_4.readFeatures(json_2310_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2310_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2310_4.addFeatures(features_2310_4);
var lyr_2310_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2310_4, 
                style: style_2310_4,
                interactive: true,
                title: '<img src="styles/legend/2310_4.png" /> 2310'
            });
var format_2311_5 = new ol.format.GeoJSON();
var features_2311_5 = format_2311_5.readFeatures(json_2311_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_5.addFeatures(features_2311_5);
var lyr_2311_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311_5, 
                style: style_2311_5,
                interactive: true,
                title: '<img src="styles/legend/2311_5.png" /> 2311'
            });
var format_3101_6 = new ol.format.GeoJSON();
var features_3101_6 = format_3101_6.readFeatures(json_3101_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_6.addFeatures(features_3101_6);
var lyr_3101_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_6, 
                style: style_3101_6,
                interactive: true,
                title: '<img src="styles/legend/3101_6.png" /> 3101'
            });
var format_2325_7 = new ol.format.GeoJSON();
var features_2325_7 = format_2325_7.readFeatures(json_2325_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_7.addFeatures(features_2325_7);
var lyr_2325_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325_7, 
                style: style_2325_7,
                interactive: true,
                title: '<img src="styles/legend/2325_7.png" /> 2325'
            });
var format_3411p_8 = new ol.format.GeoJSON();
var features_3411p_8 = format_3411p_8.readFeatures(json_3411p_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411p_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411p_8.addFeatures(features_3411p_8);
var lyr_3411p_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3411p_8, 
                style: style_3411p_8,
                interactive: true,
                title: '<img src="styles/legend/3411p_8.png" /> 3411p'
            });
var format_5124_9 = new ol.format.GeoJSON();
var features_5124_9 = format_5124_9.readFeatures(json_5124_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_9.addFeatures(features_5124_9);
var lyr_5124_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_9, 
                style: style_5124_9,
                interactive: true,
                title: '<img src="styles/legend/5124_9.png" /> 5124'
            });
var group_111 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_5130_1,lyr_4107_2,lyr_2320_3,lyr_2310_4,lyr_2311_5,lyr_3101_6,lyr_2325_7,lyr_3411p_8,lyr_5124_9,],
                                title: "111"});

lyr_OpenStreetMap_0.setVisible(true);lyr_5130_1.setVisible(true);lyr_4107_2.setVisible(true);lyr_2320_3.setVisible(true);lyr_2310_4.setVisible(true);lyr_2311_5.setVisible(true);lyr_3101_6.setVisible(true);lyr_2325_7.setVisible(true);lyr_3411p_8.setVisible(true);lyr_5124_9.setVisible(true);
var layersList = [group_111];
lyr_5130_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CÓDIGO': 'CÓDIGO', 'NOMBRE': 'NOMBRE', });
lyr_4107_2.set('fieldAliases', {'fid': 'fid', });
lyr_2320_3.set('fieldAliases', {'fid': 'fid', 'codigo_obj': 'codigo_obj', 'Nombre_obj': 'Nombre_obj', });
lyr_2310_4.set('fieldAliases', {'fid': 'fid', 'cod_atributo': 'cod_atributo', 'nombre_atributo': 'nombre_atributo', });
lyr_2311_5.set('fieldAliases', {'fid': 'fid', });
lyr_3101_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'OBJETCID': 'OBJETCID', 'PROYECTO': 'PROYECTO', 'NOMBRE': 'NOMBRE', });
lyr_2325_7.set('fieldAliases', {'fid': 'fid', 'codigo_objet': 'codigo_objet', 'Nombre_atributo': 'Nombre_atributo', 'Codigo_atributo': 'Codigo_atributo', 'Nombre_objeto': 'Nombre_objeto', 'Nombre_obj': 'Nombre_obj', });
lyr_3411p_8.set('fieldAliases', {'fid': 'fid', 'codigo_objeto': 'codigo_objeto', 'Nombre_obj': 'Nombre_obj', 'codig_atributo': 'codig_atributo', 'Nombre_atributo': 'Nombre_atributo', });
lyr_5124_9.set('fieldAliases', {'fid': 'fid', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', });
lyr_5130_1.set('fieldImages', {'fid': 'Range', 'id': 'TextEdit', 'CÓDIGO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_4107_2.set('fieldImages', {'fid': 'Range', });
lyr_2320_3.set('fieldImages', {'fid': 'Range', 'codigo_obj': 'TextEdit', 'Nombre_obj': 'TextEdit', });
lyr_2310_4.set('fieldImages', {'fid': '', 'cod_atributo': '', 'nombre_atributo': '', });
lyr_2311_5.set('fieldImages', {'fid': '', });
lyr_3101_6.set('fieldImages', {'fid': 'Range', 'id': 'Range', 'codigo': 'TextEdit', 'OBJETCID': 'Range', 'PROYECTO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_2325_7.set('fieldImages', {'fid': 'Range', 'codigo_objet': 'Range', 'Nombre_atributo': 'TextEdit', 'Codigo_atributo': 'Range', 'Nombre_objeto': 'TextEdit', 'Nombre_obj': 'TextEdit', });
lyr_3411p_8.set('fieldImages', {'fid': '', 'codigo_objeto': '', 'Nombre_obj': '', 'codig_atributo': '', 'Nombre_atributo': '', });
lyr_5124_9.set('fieldImages', {'fid': 'Range', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'Range', });
lyr_5130_1.set('fieldLabels', {});
lyr_4107_2.set('fieldLabels', {});
lyr_2320_3.set('fieldLabels', {});
lyr_2310_4.set('fieldLabels', {});
lyr_2311_5.set('fieldLabels', {});
lyr_3101_6.set('fieldLabels', {});
lyr_2325_7.set('fieldLabels', {});
lyr_3411p_8.set('fieldLabels', {});
lyr_5124_9.set('fieldLabels', {});
lyr_5124_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});