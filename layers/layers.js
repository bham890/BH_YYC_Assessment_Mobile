var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Basemap_1 = new ol.layer.Tile({
            'title': 'Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
            })
        });
var format_CommunityBoundaries_2 = new ol.format.GeoJSON();
var features_CommunityBoundaries_2 = format_CommunityBoundaries_2.readFeatures(json_CommunityBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityBoundaries_2.addFeatures(features_CommunityBoundaries_2);
var lyr_CommunityBoundaries_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunityBoundaries_2, 
                style: style_CommunityBoundaries_2,
                interactive: true,
                title: '<img src="styles/legend/CommunityBoundaries_2.png" /> Community Boundaries'
            });
var format_2020to2021NonResidentialAssessmentChange_3 = new ol.format.GeoJSON();
var features_2020to2021NonResidentialAssessmentChange_3 = format_2020to2021NonResidentialAssessmentChange_3.readFeatures(json_2020to2021NonResidentialAssessmentChange_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020to2021NonResidentialAssessmentChange_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020to2021NonResidentialAssessmentChange_3.addFeatures(features_2020to2021NonResidentialAssessmentChange_3);
var lyr_2020to2021NonResidentialAssessmentChange_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020to2021NonResidentialAssessmentChange_3, 
                style: style_2020to2021NonResidentialAssessmentChange_3,
                interactive: true,
    title: '2020 to 2021 Non-Residential Assessment Change<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_0.png" /> -10% or Lower<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_1.png" /> -10% to -7.5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_2.png" /> -7.5% to -5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_3.png" /> -5% to -2.5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_4.png" /> -2.5% to 0%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_5.png" /> 0% to 2.5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_6.png" /> 2.5% to 5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_7.png" /> 5% to 7.5%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_8.png" /> 7.5% to 10%<br />\
    <img src="styles/legend/2020to2021NonResidentialAssessmentChange_3_9.png" /> 10% or Higher<br />'
        });
var format_2021to2022NonResidentialAssessmentChange_4 = new ol.format.GeoJSON();
var features_2021to2022NonResidentialAssessmentChange_4 = format_2021to2022NonResidentialAssessmentChange_4.readFeatures(json_2021to2022NonResidentialAssessmentChange_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021to2022NonResidentialAssessmentChange_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021to2022NonResidentialAssessmentChange_4.addFeatures(features_2021to2022NonResidentialAssessmentChange_4);
var lyr_2021to2022NonResidentialAssessmentChange_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021to2022NonResidentialAssessmentChange_4, 
                style: style_2021to2022NonResidentialAssessmentChange_4,
                interactive: true,
    title: '2021 to 2022 Non-Residential Assessment Change<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_0.png" /> -10% or Lower<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_1.png" /> -10% to -7.5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_2.png" /> -7.5% to -5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_3.png" /> -5% to -2.5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_4.png" /> -2.5% to 0%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_5.png" /> 0% to 2.5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_6.png" /> 2.5% to 5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_7.png" /> 5% to 7.5%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_8.png" /> 7.5% to 10%<br />\
    <img src="styles/legend/2021to2022NonResidentialAssessmentChange_4_9.png" /> 10% or higher<br />'
        });
var format_2020to2021ResidentialAssessmentChange_5 = new ol.format.GeoJSON();
var features_2020to2021ResidentialAssessmentChange_5 = format_2020to2021ResidentialAssessmentChange_5.readFeatures(json_2020to2021ResidentialAssessmentChange_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020to2021ResidentialAssessmentChange_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020to2021ResidentialAssessmentChange_5.addFeatures(features_2020to2021ResidentialAssessmentChange_5);
var lyr_2020to2021ResidentialAssessmentChange_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020to2021ResidentialAssessmentChange_5, 
                style: style_2020to2021ResidentialAssessmentChange_5,
                interactive: true,
    title: '2020 to 2021 Residential Assessment Change<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_0.png" /> -10% or Lower<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_1.png" /> -10% to -7.5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_2.png" /> -7.5% to -5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_3.png" /> -5% to -2.5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_4.png" /> -2.5% to 0%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_5.png" /> 0% to 2.5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_6.png" /> 2.5% to 5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_7.png" /> 5% to 7.5%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_8.png" /> 7.5% to 10%<br />\
    <img src="styles/legend/2020to2021ResidentialAssessmentChange_5_9.png" /> 10% or Higher<br />'
        });
var format_2021to2022ResidentialAssessmentChange_6 = new ol.format.GeoJSON();
var features_2021to2022ResidentialAssessmentChange_6 = format_2021to2022ResidentialAssessmentChange_6.readFeatures(json_2021to2022ResidentialAssessmentChange_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021to2022ResidentialAssessmentChange_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021to2022ResidentialAssessmentChange_6.addFeatures(features_2021to2022ResidentialAssessmentChange_6);
var lyr_2021to2022ResidentialAssessmentChange_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021to2022ResidentialAssessmentChange_6, 
                style: style_2021to2022ResidentialAssessmentChange_6,
                interactive: true,
    title: '2021 to 2022 Residential Assessment Change<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_0.png" /> -10% or Lower<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_1.png" /> -10% to -7.5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_2.png" /> -7.5% to -5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_3.png" /> -5% to -2.5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_4.png" /> -2.5% to 0%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_5.png" /> 0% to 2.5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_6.png" /> 2.5% to 5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_7.png" /> 5% to 7.5%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_8.png" /> 7.5% to 10%<br />\
    <img src="styles/legend/2021to2022ResidentialAssessmentChange_6_9.png" /> 10% or higher<br />'
        });
var format_NonResidentialProperty_7 = new ol.format.GeoJSON();
var features_NonResidentialProperty_7 = format_NonResidentialProperty_7.readFeatures(json_NonResidentialProperty_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonResidentialProperty_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonResidentialProperty_7.addFeatures(features_NonResidentialProperty_7);
var lyr_NonResidentialProperty_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NonResidentialProperty_7,
maxResolution:14.00223307613098,
 
                style: style_NonResidentialProperty_7,
                interactive: true,
                title: '<img src="styles/legend/NonResidentialProperty_7.png" /> Non-Residential Property'
            });
var format_ResidentialProperty_8 = new ol.format.GeoJSON();
var features_ResidentialProperty_8 = format_ResidentialProperty_8.readFeatures(json_ResidentialProperty_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialProperty_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialProperty_8.addFeatures(features_ResidentialProperty_8);
var lyr_ResidentialProperty_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResidentialProperty_8,
maxResolution:14.00223307613098,
 
                style: style_ResidentialProperty_8,
                interactive: true,
                title: '<img src="styles/legend/ResidentialProperty_8.png" /> Residential Property'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(false);lyr_Basemap_1.setVisible(true);lyr_CommunityBoundaries_2.setVisible(true);lyr_2020to2021NonResidentialAssessmentChange_3.setVisible(false);lyr_2021to2022NonResidentialAssessmentChange_4.setVisible(false);lyr_2020to2021ResidentialAssessmentChange_5.setVisible(false);lyr_2021to2022ResidentialAssessmentChange_6.setVisible(false);lyr_NonResidentialProperty_7.setVisible(false);lyr_ResidentialProperty_8.setVisible(false);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Basemap_1,lyr_CommunityBoundaries_2,lyr_2020to2021NonResidentialAssessmentChange_3,lyr_2021to2022NonResidentialAssessmentChange_4,lyr_2020to2021ResidentialAssessmentChange_5,lyr_2021to2022ResidentialAssessmentChange_6,lyr_NonResidentialProperty_7,lyr_ResidentialProperty_8];
lyr_CommunityBoundaries_2.set('fieldAliases', {'class': 'class', 'class_code': 'class_code', 'comm_code': 'comm_code', 'name': 'name', 'sector': 'sector', 'srg': 'srg', 'comm_struc': 'comm_struc', });
lyr_2020to2021NonResidentialAssessmentChange_3.set('fieldAliases', {'class': 'class', 'comm_code': 'comm_code', 'name': 'name', 'sector': 'sector', 'comm_struc': 'comm_struc', 'Type': 'Type', 'Com_Type': 'Com_Type', '2022_AVG': '2022_AVG', '2021_AVG': '2021_AVG', '2020_AVG': '2020_AVG', '21_22_Chan': '21_22_Chan', '20_21_Chan': '20_21_Chan', '21_22Label': '21_22Label', '20_21Label': '20_21Label', 'Label': 'Label', });
lyr_2021to2022NonResidentialAssessmentChange_4.set('fieldAliases', {'class': 'class', 'comm_code': 'comm_code', 'name': 'name', 'sector': 'sector', 'comm_struc': 'comm_struc', 'Type': 'Type', 'Com_Type': 'Com_Type', '2022_AVG': '2022_AVG', '2021_AVG': '2021_AVG', '2020_AVG': '2020_AVG', '21_22_Chan': '21_22_Chan', '20_21_Chan': '20_21_Chan', '21_22Label': '21_22Label', '20_21Label': '20_21Label', 'Label': 'Label', });
lyr_2020to2021ResidentialAssessmentChange_5.set('fieldAliases', {'class': 'class', 'comm_code': 'comm_code', 'name': 'name', 'sector': 'sector', 'comm_struc': 'comm_struc', 'Type': 'Type', 'Com_Type': 'Com_Type', '2022_AVG': '2022_AVG', '2021_AVG': '2021_AVG', '2020_AVG': '2020_AVG', '21_22_Chan': '21_22_Chan', '20_21_Chan': '20_21_Chan', '21_22Label': '21_22Label', '20_21Label': '20_21Label', 'Label': 'Label', });
lyr_2021to2022ResidentialAssessmentChange_6.set('fieldAliases', {'class': 'class', 'comm_code': 'comm_code', 'name': 'name', 'sector': 'sector', 'comm_struc': 'comm_struc', 'Type': 'Type', 'Com_Type': 'Com_Type', '2022_AVG': '2022_AVG', '2021_AVG': '2021_AVG', '2020_AVG': '2020_AVG', '21_22_Chan': '21_22_Chan', '20_21_Chan': '20_21_Chan', '21_22Label': '21_22Label', '20_21Label': '20_21Label', 'Label': 'Label', });
lyr_NonResidentialProperty_7.set('fieldAliases', {'roll_year': 'roll_year', 'roll_numbe': 'roll_numbe', 'address': 'address', '2022_Asses': '2022_Asses', 'assessment': 'assessment', 'comm_code': 'comm_code', 'comm_name': 'comm_name', 'latitude': 'latitude', 'longitude': 'longitude', '2021_Asses': '2021_Asses', '2020_Asses': '2020_Asses', });
lyr_ResidentialProperty_8.set('fieldAliases', {'roll_year': 'roll_year', 'roll_numbe': 'roll_numbe', 'address': 'address', '2022_Asses': '2022_Asses', 'assessment': 'assessment', 'comm_code': 'comm_code', 'comm_name': 'comm_name', 'latitude': 'latitude', 'longitude': 'longitude', '2021_Asses': '2021_Asses', '2020_Asses': '2020_Asses', });
lyr_CommunityBoundaries_2.set('fieldImages', {'class': 'Hidden', 'class_code': 'Hidden', 'comm_code': 'TextEdit', 'name': 'TextEdit', 'sector': 'Hidden', 'srg': 'Hidden', 'comm_struc': 'Hidden', });
lyr_2020to2021NonResidentialAssessmentChange_3.set('fieldImages', {'class': 'Hidden', 'comm_code': 'TextEdit', 'name': 'TextEdit', 'sector': 'Hidden', 'comm_struc': 'Hidden', 'Type': 'Hidden', 'Com_Type': 'Hidden', '2022_AVG': 'Hidden', '2021_AVG': 'TextEdit', '2020_AVG': 'TextEdit', '21_22_Chan': 'Hidden', '20_21_Chan': 'TextEdit', '21_22Label': 'Hidden', '20_21Label': 'Hidden', 'Label': 'TextEdit', });
lyr_2021to2022NonResidentialAssessmentChange_4.set('fieldImages', {'class': 'Hidden', 'comm_code': 'TextEdit', 'name': 'TextEdit', 'sector': 'Hidden', 'comm_struc': 'Hidden', 'Type': 'Hidden', 'Com_Type': 'Hidden', '2022_AVG': 'TextEdit', '2021_AVG': 'TextEdit', '2020_AVG': 'Hidden', '21_22_Chan': 'TextEdit', '20_21_Chan': 'Hidden', '21_22Label': 'Hidden', '20_21Label': 'Hidden', 'Label': 'TextEdit', });
lyr_2020to2021ResidentialAssessmentChange_5.set('fieldImages', {'class': 'Hidden', 'comm_code': 'TextEdit', 'name': 'TextEdit', 'sector': 'Hidden', 'comm_struc': 'Hidden', 'Type': 'Hidden', 'Com_Type': 'Hidden', '2022_AVG': 'Hidden', '2021_AVG': 'TextEdit', '2020_AVG': 'TextEdit', '21_22_Chan': 'Hidden', '20_21_Chan': 'TextEdit', '21_22Label': 'Hidden', '20_21Label': 'Hidden', 'Label': 'TextEdit', });
lyr_2021to2022ResidentialAssessmentChange_6.set('fieldImages', {'class': 'Hidden', 'comm_code': 'TextEdit', 'name': 'TextEdit', 'sector': 'Hidden', 'comm_struc': 'Hidden', 'Type': 'Hidden', 'Com_Type': 'Hidden', '2022_AVG': 'TextEdit', '2021_AVG': 'TextEdit', '2020_AVG': 'Hidden', '21_22_Chan': 'TextEdit', '20_21_Chan': 'Hidden', '21_22Label': 'Hidden', '20_21Label': 'Hidden', 'Label': 'TextEdit', });
lyr_NonResidentialProperty_7.set('fieldImages', {'roll_year': 'TextEdit', 'roll_numbe': 'TextEdit', 'address': 'TextEdit', '2022_Asses': 'TextEdit', 'assessment': 'Hidden', 'comm_code': 'TextEdit', 'comm_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '2021_Asses': 'TextEdit', '2020_Asses': 'TextEdit', });
lyr_ResidentialProperty_8.set('fieldImages', {'roll_year': 'Hidden', 'roll_numbe': 'TextEdit', 'address': 'TextEdit', '2022_Asses': 'TextEdit', 'assessment': 'Hidden', 'comm_code': 'TextEdit', 'comm_name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '2021_Asses': 'TextEdit', '2020_Asses': 'TextEdit', });
lyr_CommunityBoundaries_2.set('fieldLabels', {'comm_code': 'inline label', 'name': 'inline label', });
lyr_2020to2021NonResidentialAssessmentChange_3.set('fieldLabels', {'comm_code': 'inline label', 'name': 'inline label', '2021_AVG': 'inline label', '2020_AVG': 'no label', '20_21_Chan': 'inline label', 'Label': 'no label', });
lyr_2021to2022NonResidentialAssessmentChange_4.set('fieldLabels', {'comm_code': 'inline label', 'name': 'inline label', '2022_AVG': 'inline label', '2021_AVG': 'inline label', '21_22_Chan': 'inline label', 'Label': 'inline label', });
lyr_2020to2021ResidentialAssessmentChange_5.set('fieldLabels', {'comm_code': 'inline label', 'name': 'inline label', '2021_AVG': 'inline label', '2020_AVG': 'inline label', '20_21_Chan': 'inline label', 'Label': 'inline label', });
lyr_2021to2022ResidentialAssessmentChange_6.set('fieldLabels', {'comm_code': 'inline label', 'name': 'inline label', '2022_AVG': 'inline label', '2021_AVG': 'inline label', '21_22_Chan': 'inline label', 'Label': 'inline label', });
lyr_NonResidentialProperty_7.set('fieldLabels', {'roll_year': 'inline label', 'roll_numbe': 'inline label', 'address': 'inline label', '2022_Asses': 'inline label', 'comm_code': 'inline label', 'comm_name': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', '2021_Asses': 'inline label', '2020_Asses': 'inline label', });
lyr_ResidentialProperty_8.set('fieldLabels', {'roll_numbe': 'inline label', 'address': 'inline label', '2022_Asses': 'inline label', 'comm_code': 'inline label', 'comm_name': 'inline label', 'latitude': 'inline label', 'longitude': 'inline label', '2021_Asses': 'inline label', '2020_Asses': 'inline label', });
lyr_ResidentialProperty_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});