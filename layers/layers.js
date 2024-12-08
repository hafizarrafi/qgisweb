var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_RT_AREA_3 = new ol.format.GeoJSON();
var features_RT_AREA_3 = format_RT_AREA_3.readFeatures(json_RT_AREA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_AREA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_AREA_3.addFeatures(features_RT_AREA_3);
var lyr_RT_AREA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_AREA_3, 
                style: style_RT_AREA_3,
                popuplayertitle: "RT_AREA",
                interactive: true,
                title: '<img src="styles/legend/RT_AREA_3.png" /> RT_AREA'
            });
var format_KASUS_DBD_4 = new ol.format.GeoJSON();
var features_KASUS_DBD_4 = format_KASUS_DBD_4.readFeatures(json_KASUS_DBD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KASUS_DBD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KASUS_DBD_4.addFeatures(features_KASUS_DBD_4);
var lyr_KASUS_DBD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KASUS_DBD_4, 
                style: style_KASUS_DBD_4,
                popuplayertitle: "KASUS_DBD",
                interactive: true,
                title: '<img src="styles/legend/KASUS_DBD_4.png" /> KASUS_DBD'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_RT_AREA_3.setVisible(true);lyr_KASUS_DBD_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OSMStandard_1,lyr_GoogleTerrainHybrid_2,lyr_RT_AREA_3,lyr_KASUS_DBD_4];
lyr_RT_AREA_3.set('fieldAliases', {'fid': 'fid', 'ID_RT': 'ID_RT', 'JUMLAH_KK': 'JUMLAH_KK', });
lyr_KASUS_DBD_4.set('fieldAliases', {'fid': 'fid', 'ID_KK': 'ID_KK', 'ID_RT': 'ID_RT', });
lyr_RT_AREA_3.set('fieldImages', {'fid': '', 'ID_RT': 'TextEdit', 'JUMLAH_KK': 'TextEdit', });
lyr_KASUS_DBD_4.set('fieldImages', {'fid': '', 'ID_KK': '', 'ID_RT': '', });
lyr_RT_AREA_3.set('fieldLabels', {'fid': 'no label', 'ID_RT': 'no label', 'JUMLAH_KK': 'no label', });
lyr_KASUS_DBD_4.set('fieldLabels', {'fid': 'no label', 'ID_KK': 'no label', 'ID_RT': 'no label', });
lyr_KASUS_DBD_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});