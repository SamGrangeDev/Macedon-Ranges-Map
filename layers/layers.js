var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TRZ2PrincipalRoadNetwork_2 = new ol.format.GeoJSON();
var features_TRZ2PrincipalRoadNetwork_2 = format_TRZ2PrincipalRoadNetwork_2.readFeatures(json_TRZ2PrincipalRoadNetwork_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ2PrincipalRoadNetwork_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ2PrincipalRoadNetwork_2.addFeatures(features_TRZ2PrincipalRoadNetwork_2);
var lyr_TRZ2PrincipalRoadNetwork_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ2PrincipalRoadNetwork_2, 
                style: style_TRZ2PrincipalRoadNetwork_2,
                popuplayertitle: "TRZ2 - Principal Road Network",
                interactive: false,
                title: '<img src="styles/legend/TRZ2PrincipalRoadNetwork_2.png" /> TRZ2 - Principal Road Network'
            });
var format_TRZ3SignificantMunicipalRoad_3 = new ol.format.GeoJSON();
var features_TRZ3SignificantMunicipalRoad_3 = format_TRZ3SignificantMunicipalRoad_3.readFeatures(json_TRZ3SignificantMunicipalRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRZ3SignificantMunicipalRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRZ3SignificantMunicipalRoad_3.addFeatures(features_TRZ3SignificantMunicipalRoad_3);
var lyr_TRZ3SignificantMunicipalRoad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRZ3SignificantMunicipalRoad_3, 
                style: style_TRZ3SignificantMunicipalRoad_3,
                popuplayertitle: "TRZ3 - Significant Municipal Road",
                interactive: false,
                title: '<img src="styles/legend/TRZ3SignificantMunicipalRoad_3.png" /> TRZ3 - Significant Municipal Road'
            });
var format_PCRZPublicConservationandResourceZone_4 = new ol.format.GeoJSON();
var features_PCRZPublicConservationandResourceZone_4 = format_PCRZPublicConservationandResourceZone_4.readFeatures(json_PCRZPublicConservationandResourceZone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PCRZPublicConservationandResourceZone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PCRZPublicConservationandResourceZone_4.addFeatures(features_PCRZPublicConservationandResourceZone_4);
var lyr_PCRZPublicConservationandResourceZone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PCRZPublicConservationandResourceZone_4, 
                style: style_PCRZPublicConservationandResourceZone_4,
                popuplayertitle: "PCRZ - Public Conservation and Resource Zone",
                interactive: false,
                title: '<img src="styles/legend/PCRZPublicConservationandResourceZone_4.png" /> PCRZ - Public Conservation and Resource Zone'
            });
var format_PPRZPublicParkandRecreationZone_5 = new ol.format.GeoJSON();
var features_PPRZPublicParkandRecreationZone_5 = format_PPRZPublicParkandRecreationZone_5.readFeatures(json_PPRZPublicParkandRecreationZone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPRZPublicParkandRecreationZone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPRZPublicParkandRecreationZone_5.addFeatures(features_PPRZPublicParkandRecreationZone_5);
var lyr_PPRZPublicParkandRecreationZone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PPRZPublicParkandRecreationZone_5, 
                style: style_PPRZPublicParkandRecreationZone_5,
                popuplayertitle: "PPRZ - Public Park and Recreation Zone",
                interactive: false,
                title: '<img src="styles/legend/PPRZPublicParkandRecreationZone_5.png" /> PPRZ - Public Park and Recreation Zone'
            });
var format_PUZ1PublicUseZoneServiceandUtility_6 = new ol.format.GeoJSON();
var features_PUZ1PublicUseZoneServiceandUtility_6 = format_PUZ1PublicUseZoneServiceandUtility_6.readFeatures(json_PUZ1PublicUseZoneServiceandUtility_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ1PublicUseZoneServiceandUtility_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ1PublicUseZoneServiceandUtility_6.addFeatures(features_PUZ1PublicUseZoneServiceandUtility_6);
var lyr_PUZ1PublicUseZoneServiceandUtility_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ1PublicUseZoneServiceandUtility_6, 
                style: style_PUZ1PublicUseZoneServiceandUtility_6,
                popuplayertitle: "PUZ1 - Public Use Zone-Service and Utility",
                interactive: false,
                title: '<img src="styles/legend/PUZ1PublicUseZoneServiceandUtility_6.png" /> PUZ1 - Public Use Zone-Service and Utility'
            });
var format_PUZ2PublicUseZoneEducation_7 = new ol.format.GeoJSON();
var features_PUZ2PublicUseZoneEducation_7 = format_PUZ2PublicUseZoneEducation_7.readFeatures(json_PUZ2PublicUseZoneEducation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ2PublicUseZoneEducation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ2PublicUseZoneEducation_7.addFeatures(features_PUZ2PublicUseZoneEducation_7);
var lyr_PUZ2PublicUseZoneEducation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ2PublicUseZoneEducation_7, 
                style: style_PUZ2PublicUseZoneEducation_7,
                popuplayertitle: "PUZ2 - Public Use Zone-Education",
                interactive: false,
                title: '<img src="styles/legend/PUZ2PublicUseZoneEducation_7.png" /> PUZ2 - Public Use Zone-Education'
            });
var format_PUZ6PublicUseZoneLocalGovernment_8 = new ol.format.GeoJSON();
var features_PUZ6PublicUseZoneLocalGovernment_8 = format_PUZ6PublicUseZoneLocalGovernment_8.readFeatures(json_PUZ6PublicUseZoneLocalGovernment_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUZ6PublicUseZoneLocalGovernment_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUZ6PublicUseZoneLocalGovernment_8.addFeatures(features_PUZ6PublicUseZoneLocalGovernment_8);
var lyr_PUZ6PublicUseZoneLocalGovernment_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUZ6PublicUseZoneLocalGovernment_8, 
                style: style_PUZ6PublicUseZoneLocalGovernment_8,
                popuplayertitle: "PUZ6 - Public Use Zone-Local Government",
                interactive: false,
                title: '<img src="styles/legend/PUZ6PublicUseZoneLocalGovernment_8.png" /> PUZ6 - Public Use Zone-Local Government'
            });
var format_C1ZCommercial1Zone_9 = new ol.format.GeoJSON();
var features_C1ZCommercial1Zone_9 = format_C1ZCommercial1Zone_9.readFeatures(json_C1ZCommercial1Zone_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C1ZCommercial1Zone_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C1ZCommercial1Zone_9.addFeatures(features_C1ZCommercial1Zone_9);
var lyr_C1ZCommercial1Zone_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C1ZCommercial1Zone_9, 
                style: style_C1ZCommercial1Zone_9,
                popuplayertitle: "C1Z - Commercial 1 Zone",
                interactive: false,
                title: '<img src="styles/legend/C1ZCommercial1Zone_9.png" /> C1Z - Commercial 1 Zone'
            });
var format_C2ZCommercial2Zone_10 = new ol.format.GeoJSON();
var features_C2ZCommercial2Zone_10 = format_C2ZCommercial2Zone_10.readFeatures(json_C2ZCommercial2Zone_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C2ZCommercial2Zone_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C2ZCommercial2Zone_10.addFeatures(features_C2ZCommercial2Zone_10);
var lyr_C2ZCommercial2Zone_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C2ZCommercial2Zone_10, 
                style: style_C2ZCommercial2Zone_10,
                popuplayertitle: "C2Z - Commercial 2 Zone",
                interactive: false,
                title: '<img src="styles/legend/C2ZCommercial2Zone_10.png" /> C2Z - Commercial 2 Zone'
            });
var format_IN1ZIndustrial1Zone_11 = new ol.format.GeoJSON();
var features_IN1ZIndustrial1Zone_11 = format_IN1ZIndustrial1Zone_11.readFeatures(json_IN1ZIndustrial1Zone_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN1ZIndustrial1Zone_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN1ZIndustrial1Zone_11.addFeatures(features_IN1ZIndustrial1Zone_11);
var lyr_IN1ZIndustrial1Zone_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN1ZIndustrial1Zone_11, 
                style: style_IN1ZIndustrial1Zone_11,
                popuplayertitle: "IN1Z - Industrial 1 Zone",
                interactive: false,
                title: '<img src="styles/legend/IN1ZIndustrial1Zone_11.png" /> IN1Z - Industrial 1 Zone'
            });
var format_IN3ZIndustrial3Zone_12 = new ol.format.GeoJSON();
var features_IN3ZIndustrial3Zone_12 = format_IN3ZIndustrial3Zone_12.readFeatures(json_IN3ZIndustrial3Zone_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN3ZIndustrial3Zone_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN3ZIndustrial3Zone_12.addFeatures(features_IN3ZIndustrial3Zone_12);
var lyr_IN3ZIndustrial3Zone_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN3ZIndustrial3Zone_12, 
                style: style_IN3ZIndustrial3Zone_12,
                popuplayertitle: "IN3Z - Industrial 3 Zone",
                interactive: false,
                title: '<img src="styles/legend/IN3ZIndustrial3Zone_12.png" /> IN3Z - Industrial 3 Zone'
            });
var format_RLZRuralLivingZone_13 = new ol.format.GeoJSON();
var features_RLZRuralLivingZone_13 = format_RLZRuralLivingZone_13.readFeatures(json_RLZRuralLivingZone_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RLZRuralLivingZone_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RLZRuralLivingZone_13.addFeatures(features_RLZRuralLivingZone_13);
var lyr_RLZRuralLivingZone_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RLZRuralLivingZone_13, 
                style: style_RLZRuralLivingZone_13,
                popuplayertitle: "RLZ - Rural Living Zone",
                interactive: false,
                title: '<img src="styles/legend/RLZRuralLivingZone_13.png" /> RLZ - Rural Living Zone'
            });
var format_FZFarmingZone_14 = new ol.format.GeoJSON();
var features_FZFarmingZone_14 = format_FZFarmingZone_14.readFeatures(json_FZFarmingZone_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FZFarmingZone_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FZFarmingZone_14.addFeatures(features_FZFarmingZone_14);
var lyr_FZFarmingZone_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FZFarmingZone_14, 
                style: style_FZFarmingZone_14,
                popuplayertitle: "FZ - Farming Zone",
                interactive: false,
                title: '<img src="styles/legend/FZFarmingZone_14.png" /> FZ - Farming Zone'
            });
var format_RCZRuralConservationZone_15 = new ol.format.GeoJSON();
var features_RCZRuralConservationZone_15 = format_RCZRuralConservationZone_15.readFeatures(json_RCZRuralConservationZone_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RCZRuralConservationZone_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RCZRuralConservationZone_15.addFeatures(features_RCZRuralConservationZone_15);
var lyr_RCZRuralConservationZone_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RCZRuralConservationZone_15, 
                style: style_RCZRuralConservationZone_15,
                popuplayertitle: "RCZ - Rural Conservation Zone",
                interactive: false,
                title: '<img src="styles/legend/RCZRuralConservationZone_15.png" /> RCZ - Rural Conservation Zone'
            });
var format_LDRZLowDensityResidentialZone_16 = new ol.format.GeoJSON();
var features_LDRZLowDensityResidentialZone_16 = format_LDRZLowDensityResidentialZone_16.readFeatures(json_LDRZLowDensityResidentialZone_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LDRZLowDensityResidentialZone_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LDRZLowDensityResidentialZone_16.addFeatures(features_LDRZLowDensityResidentialZone_16);
var lyr_LDRZLowDensityResidentialZone_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LDRZLowDensityResidentialZone_16, 
                style: style_LDRZLowDensityResidentialZone_16,
                popuplayertitle: "LDRZ - Low Density Residential Zone",
                interactive: false,
                title: '<img src="styles/legend/LDRZLowDensityResidentialZone_16.png" /> LDRZ - Low Density Residential Zone'
            });
var format_GRZGeneralResidentialZone_17 = new ol.format.GeoJSON();
var features_GRZGeneralResidentialZone_17 = format_GRZGeneralResidentialZone_17.readFeatures(json_GRZGeneralResidentialZone_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRZGeneralResidentialZone_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRZGeneralResidentialZone_17.addFeatures(features_GRZGeneralResidentialZone_17);
var lyr_GRZGeneralResidentialZone_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRZGeneralResidentialZone_17, 
                style: style_GRZGeneralResidentialZone_17,
                popuplayertitle: "GRZ - General Residential Zone",
                interactive: false,
                title: '<img src="styles/legend/GRZGeneralResidentialZone_17.png" /> GRZ - General Residential Zone'
            });
var format_AEOAirportEnvironsOverlay_18 = new ol.format.GeoJSON();
var features_AEOAirportEnvironsOverlay_18 = format_AEOAirportEnvironsOverlay_18.readFeatures(json_AEOAirportEnvironsOverlay_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEOAirportEnvironsOverlay_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEOAirportEnvironsOverlay_18.addFeatures(features_AEOAirportEnvironsOverlay_18);
var lyr_AEOAirportEnvironsOverlay_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AEOAirportEnvironsOverlay_18, 
                style: style_AEOAirportEnvironsOverlay_18,
                popuplayertitle: "AEO - Airport Environs Overlay",
                interactive: false,
                title: '<img src="styles/legend/AEOAirportEnvironsOverlay_18.png" /> AEO - Airport Environs Overlay'
            });
var format_DCPODevelopmentContributionsPlanOverlay_19 = new ol.format.GeoJSON();
var features_DCPODevelopmentContributionsPlanOverlay_19 = format_DCPODevelopmentContributionsPlanOverlay_19.readFeatures(json_DCPODevelopmentContributionsPlanOverlay_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPODevelopmentContributionsPlanOverlay_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPODevelopmentContributionsPlanOverlay_19.addFeatures(features_DCPODevelopmentContributionsPlanOverlay_19);
var lyr_DCPODevelopmentContributionsPlanOverlay_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPODevelopmentContributionsPlanOverlay_19, 
                style: style_DCPODevelopmentContributionsPlanOverlay_19,
                popuplayertitle: "DCPO - Development Contributions Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DCPODevelopmentContributionsPlanOverlay_19.png" /> DCPO - Development Contributions Plan Overlay'
            });
var format_DDODesignandDevelopmentOverlay_20 = new ol.format.GeoJSON();
var features_DDODesignandDevelopmentOverlay_20 = format_DDODesignandDevelopmentOverlay_20.readFeatures(json_DDODesignandDevelopmentOverlay_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDODesignandDevelopmentOverlay_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDODesignandDevelopmentOverlay_20.addFeatures(features_DDODesignandDevelopmentOverlay_20);
var lyr_DDODesignandDevelopmentOverlay_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDODesignandDevelopmentOverlay_20, 
                style: style_DDODesignandDevelopmentOverlay_20,
                popuplayertitle: "DDO - Design and Development Overlay",
                interactive: false,
                title: '<img src="styles/legend/DDODesignandDevelopmentOverlay_20.png" /> DDO - Design and Development Overlay'
            });
var format_DPODevelopmentPlanOverlay_21 = new ol.format.GeoJSON();
var features_DPODevelopmentPlanOverlay_21 = format_DPODevelopmentPlanOverlay_21.readFeatures(json_DPODevelopmentPlanOverlay_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPODevelopmentPlanOverlay_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPODevelopmentPlanOverlay_21.addFeatures(features_DPODevelopmentPlanOverlay_21);
var lyr_DPODevelopmentPlanOverlay_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPODevelopmentPlanOverlay_21, 
                style: style_DPODevelopmentPlanOverlay_21,
                popuplayertitle: "DPO - Development Plan Overlay",
                interactive: false,
                title: '<img src="styles/legend/DPODevelopmentPlanOverlay_21.png" /> DPO - Development Plan Overlay'
            });
var format_EAOEnvironmentalAuditOverlay_22 = new ol.format.GeoJSON();
var features_EAOEnvironmentalAuditOverlay_22 = format_EAOEnvironmentalAuditOverlay_22.readFeatures(json_EAOEnvironmentalAuditOverlay_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAOEnvironmentalAuditOverlay_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EAOEnvironmentalAuditOverlay_22.addFeatures(features_EAOEnvironmentalAuditOverlay_22);
var lyr_EAOEnvironmentalAuditOverlay_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EAOEnvironmentalAuditOverlay_22, 
                style: style_EAOEnvironmentalAuditOverlay_22,
                popuplayertitle: "EAO - Environmental Audit Overlay",
                interactive: false,
                title: '<img src="styles/legend/EAOEnvironmentalAuditOverlay_22.png" /> EAO - Environmental Audit Overlay'
            });
var format_EMOErosionManagementOverlay_23 = new ol.format.GeoJSON();
var features_EMOErosionManagementOverlay_23 = format_EMOErosionManagementOverlay_23.readFeatures(json_EMOErosionManagementOverlay_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMOErosionManagementOverlay_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMOErosionManagementOverlay_23.addFeatures(features_EMOErosionManagementOverlay_23);
var lyr_EMOErosionManagementOverlay_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMOErosionManagementOverlay_23, 
                style: style_EMOErosionManagementOverlay_23,
                popuplayertitle: "EMO - Erosion Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/EMOErosionManagementOverlay_23.png" /> EMO - Erosion Management Overlay'
            });
var format_BMOBushfireManagementOverlay_24 = new ol.format.GeoJSON();
var features_BMOBushfireManagementOverlay_24 = format_BMOBushfireManagementOverlay_24.readFeatures(json_BMOBushfireManagementOverlay_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMOBushfireManagementOverlay_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMOBushfireManagementOverlay_24.addFeatures(features_BMOBushfireManagementOverlay_24);
var lyr_BMOBushfireManagementOverlay_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMOBushfireManagementOverlay_24, 
                style: style_BMOBushfireManagementOverlay_24,
                popuplayertitle: "BMO - Bushfire Management Overlay",
                interactive: false,
                title: '<img src="styles/legend/BMOBushfireManagementOverlay_24.png" /> BMO - Bushfire Management Overlay'
            });
var format_ESOEnvironmentalSignificanceOverlay_25 = new ol.format.GeoJSON();
var features_ESOEnvironmentalSignificanceOverlay_25 = format_ESOEnvironmentalSignificanceOverlay_25.readFeatures(json_ESOEnvironmentalSignificanceOverlay_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESOEnvironmentalSignificanceOverlay_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESOEnvironmentalSignificanceOverlay_25.addFeatures(features_ESOEnvironmentalSignificanceOverlay_25);
var lyr_ESOEnvironmentalSignificanceOverlay_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESOEnvironmentalSignificanceOverlay_25, 
                style: style_ESOEnvironmentalSignificanceOverlay_25,
                popuplayertitle: "ESO - Environmental Significance Overlay",
                interactive: false,
                title: '<img src="styles/legend/ESOEnvironmentalSignificanceOverlay_25.png" /> ESO - Environmental Significance Overlay'
            });
var format_RORestructureOverlay_26 = new ol.format.GeoJSON();
var features_RORestructureOverlay_26 = format_RORestructureOverlay_26.readFeatures(json_RORestructureOverlay_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RORestructureOverlay_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RORestructureOverlay_26.addFeatures(features_RORestructureOverlay_26);
var lyr_RORestructureOverlay_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RORestructureOverlay_26, 
                style: style_RORestructureOverlay_26,
                popuplayertitle: "RO - Restructure Overlay",
                interactive: false,
                title: '<img src="styles/legend/RORestructureOverlay_26.png" /> RO - Restructure Overlay'
            });
var format_SLOSignificantLandscapeOverlay_27 = new ol.format.GeoJSON();
var features_SLOSignificantLandscapeOverlay_27 = format_SLOSignificantLandscapeOverlay_27.readFeatures(json_SLOSignificantLandscapeOverlay_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOSignificantLandscapeOverlay_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOSignificantLandscapeOverlay_27.addFeatures(features_SLOSignificantLandscapeOverlay_27);
var lyr_SLOSignificantLandscapeOverlay_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLOSignificantLandscapeOverlay_27, 
                style: style_SLOSignificantLandscapeOverlay_27,
                popuplayertitle: "SLO - Significant Landscape Overlay",
                interactive: false,
                title: '<img src="styles/legend/SLOSignificantLandscapeOverlay_27.png" /> SLO - Significant Landscape Overlay'
            });
var format_HOHeritageOverlay_28 = new ol.format.GeoJSON();
var features_HOHeritageOverlay_28 = format_HOHeritageOverlay_28.readFeatures(json_HOHeritageOverlay_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOHeritageOverlay_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOHeritageOverlay_28.addFeatures(features_HOHeritageOverlay_28);
var lyr_HOHeritageOverlay_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOHeritageOverlay_28, 
                style: style_HOHeritageOverlay_28,
                popuplayertitle: "HO - Heritage Overlay",
                interactive: false,
                title: '<img src="styles/legend/HOHeritageOverlay_28.png" /> HO - Heritage Overlay'
            });
var format_LSIOLandSubjecttoInundationOverlay_29 = new ol.format.GeoJSON();
var features_LSIOLandSubjecttoInundationOverlay_29 = format_LSIOLandSubjecttoInundationOverlay_29.readFeatures(json_LSIOLandSubjecttoInundationOverlay_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSIOLandSubjecttoInundationOverlay_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSIOLandSubjecttoInundationOverlay_29.addFeatures(features_LSIOLandSubjecttoInundationOverlay_29);
var lyr_LSIOLandSubjecttoInundationOverlay_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSIOLandSubjecttoInundationOverlay_29, 
                style: style_LSIOLandSubjecttoInundationOverlay_29,
                popuplayertitle: "LSIO - Land Subject to Inundation Overlay",
                interactive: false,
                title: '<img src="styles/legend/LSIOLandSubjecttoInundationOverlay_29.png" /> LSIO - Land Subject to Inundation Overlay'
            });
var format_SCOSpecificControlsOverlay_30 = new ol.format.GeoJSON();
var features_SCOSpecificControlsOverlay_30 = format_SCOSpecificControlsOverlay_30.readFeatures(json_SCOSpecificControlsOverlay_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCOSpecificControlsOverlay_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCOSpecificControlsOverlay_30.addFeatures(features_SCOSpecificControlsOverlay_30);
var lyr_SCOSpecificControlsOverlay_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCOSpecificControlsOverlay_30, 
                style: style_SCOSpecificControlsOverlay_30,
                popuplayertitle: "SCO - Specific Controls Overlay",
                interactive: false,
                title: '<img src="styles/legend/SCOSpecificControlsOverlay_30.png" /> SCO - Specific Controls Overlay'
            });
var format_VPOVegetationProtectionOverlay_31 = new ol.format.GeoJSON();
var features_VPOVegetationProtectionOverlay_31 = format_VPOVegetationProtectionOverlay_31.readFeatures(json_VPOVegetationProtectionOverlay_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPOVegetationProtectionOverlay_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPOVegetationProtectionOverlay_31.addFeatures(features_VPOVegetationProtectionOverlay_31);
var lyr_VPOVegetationProtectionOverlay_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VPOVegetationProtectionOverlay_31, 
                style: style_VPOVegetationProtectionOverlay_31,
                popuplayertitle: "VPO - Vegetation Protection Overlay",
                interactive: false,
                title: '<img src="styles/legend/VPOVegetationProtectionOverlay_31.png" /> VPO - Vegetation Protection Overlay'
            });
var lyr_ResidentialLandStagingPlan_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "Residential Land Staging Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ResidentialLandStagingPlan_32.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16111331.989594, -4491583.966703, 16115155.358726, -4486283.415199]
                            })
                        });
var format_Suburb_33 = new ol.format.GeoJSON();
var features_Suburb_33 = format_Suburb_33.readFeatures(json_Suburb_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburb_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburb_33.addFeatures(features_Suburb_33);
var lyr_Suburb_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburb_33, 
                style: style_Suburb_33,
                popuplayertitle: "Suburb",
                interactive: false,
                title: '<img src="styles/legend/Suburb_33.png" /> Suburb'
            });
var format_LGA_34 = new ol.format.GeoJSON();
var features_LGA_34 = format_LGA_34.readFeatures(json_LGA_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LGA_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LGA_34.addFeatures(features_LGA_34);
var lyr_LGA_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LGA_34, 
                style: style_LGA_34,
                popuplayertitle: "LGA",
                interactive: false,
                title: '<img src="styles/legend/LGA_34.png" /> LGA'
            });
var format_PropertyBoundaries_35 = new ol.format.GeoJSON();
var features_PropertyBoundaries_35 = format_PropertyBoundaries_35.readFeatures(json_PropertyBoundaries_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PropertyBoundaries_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PropertyBoundaries_35.addFeatures(features_PropertyBoundaries_35);
var lyr_PropertyBoundaries_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PropertyBoundaries_35, 
                style: style_PropertyBoundaries_35,
                popuplayertitle: "Property Boundaries",
                interactive: true,
                title: '<img src="styles/legend/PropertyBoundaries_35.png" /> Property Boundaries'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburb_33,lyr_LGA_34,lyr_PropertyBoundaries_35,],
                                fold: "open",
                                title: "Administrative"});
var group_PSP = new ol.layer.Group({
                                layers: [lyr_ResidentialLandStagingPlan_32,],
                                fold: "open",
                                title: "PSP"});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_HOHeritageOverlay_28,lyr_LSIOLandSubjecttoInundationOverlay_29,lyr_SCOSpecificControlsOverlay_30,lyr_VPOVegetationProtectionOverlay_31,],
                                fold: "open",
                                title: "NDH  Deducted Overlays"});
var group_NotetoDueDiligence = new ol.layer.Group({
                                layers: [lyr_BMOBushfireManagementOverlay_24,lyr_ESOEnvironmentalSignificanceOverlay_25,lyr_RORestructureOverlay_26,lyr_SLOSignificantLandscapeOverlay_27,],
                                fold: "open",
                                title: "Note to Due Diligence"});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_AEOAirportEnvironsOverlay_18,lyr_DCPODevelopmentContributionsPlanOverlay_19,lyr_DDODesignandDevelopmentOverlay_20,lyr_DPODevelopmentPlanOverlay_21,lyr_EAOEnvironmentalAuditOverlay_22,lyr_EMOErosionManagementOverlay_23,],
                                fold: "open",
                                title: "Other Overlays"});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_TRZ2PrincipalRoadNetwork_2,lyr_TRZ3SignificantMunicipalRoad_3,lyr_PCRZPublicConservationandResourceZone_4,lyr_PPRZPublicParkandRecreationZone_5,lyr_PUZ1PublicUseZoneServiceandUtility_6,lyr_PUZ2PublicUseZoneEducation_7,lyr_PUZ6PublicUseZoneLocalGovernment_8,lyr_C1ZCommercial1Zone_9,lyr_C2ZCommercial2Zone_10,lyr_IN1ZIndustrial1Zone_11,lyr_IN3ZIndustrial3Zone_12,lyr_RLZRuralLivingZone_13,lyr_FZFarmingZone_14,lyr_RCZRuralConservationZone_15,lyr_LDRZLowDensityResidentialZone_16,lyr_GRZGeneralResidentialZone_17,],
                                fold: "open",
                                title: "Zoning"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_TRZ2PrincipalRoadNetwork_2.setVisible(false);lyr_TRZ3SignificantMunicipalRoad_3.setVisible(false);lyr_PCRZPublicConservationandResourceZone_4.setVisible(false);lyr_PPRZPublicParkandRecreationZone_5.setVisible(false);lyr_PUZ1PublicUseZoneServiceandUtility_6.setVisible(false);lyr_PUZ2PublicUseZoneEducation_7.setVisible(false);lyr_PUZ6PublicUseZoneLocalGovernment_8.setVisible(false);lyr_C1ZCommercial1Zone_9.setVisible(false);lyr_C2ZCommercial2Zone_10.setVisible(false);lyr_IN1ZIndustrial1Zone_11.setVisible(false);lyr_IN3ZIndustrial3Zone_12.setVisible(false);lyr_RLZRuralLivingZone_13.setVisible(false);lyr_FZFarmingZone_14.setVisible(false);lyr_RCZRuralConservationZone_15.setVisible(false);lyr_LDRZLowDensityResidentialZone_16.setVisible(false);lyr_GRZGeneralResidentialZone_17.setVisible(false);lyr_AEOAirportEnvironsOverlay_18.setVisible(false);lyr_DCPODevelopmentContributionsPlanOverlay_19.setVisible(false);lyr_DDODesignandDevelopmentOverlay_20.setVisible(false);lyr_DPODevelopmentPlanOverlay_21.setVisible(false);lyr_EAOEnvironmentalAuditOverlay_22.setVisible(false);lyr_EMOErosionManagementOverlay_23.setVisible(false);lyr_BMOBushfireManagementOverlay_24.setVisible(false);lyr_ESOEnvironmentalSignificanceOverlay_25.setVisible(false);lyr_RORestructureOverlay_26.setVisible(false);lyr_SLOSignificantLandscapeOverlay_27.setVisible(false);lyr_HOHeritageOverlay_28.setVisible(false);lyr_LSIOLandSubjecttoInundationOverlay_29.setVisible(false);lyr_SCOSpecificControlsOverlay_30.setVisible(false);lyr_VPOVegetationProtectionOverlay_31.setVisible(false);lyr_ResidentialLandStagingPlan_32.setVisible(false);lyr_Suburb_33.setVisible(true);lyr_LGA_34.setVisible(true);lyr_PropertyBoundaries_35.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_OtherOverlays,group_NotetoDueDiligence,group_NDHDeductedOverlays,group_PSP,group_Administrative];
lyr_TRZ2PrincipalRoadNetwork_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_TRZ3SignificantMunicipalRoad_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_PCRZPublicConservationandResourceZone_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_PPRZPublicParkandRecreationZone_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_PUZ1PublicUseZoneServiceandUtility_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_PUZ2PublicUseZoneEducation_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_PUZ6PublicUseZoneLocalGovernment_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_C1ZCommercial1Zone_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_C2ZCommercial2Zone_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_IN1ZIndustrial1Zone_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_IN3ZIndustrial3Zone_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_RLZRuralLivingZone_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_FZFarmingZone_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_RCZRuralConservationZone_15.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_LDRZLowDensityResidentialZone_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_GRZGeneralResidentialZone_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'Shape_Length': 'SHAPE_Length', 'Shape_Area': 'SHAPE_Area', });
lyr_AEOAirportEnvironsOverlay_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DCPODevelopmentContributionsPlanOverlay_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DDODesignandDevelopmentOverlay_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DPODevelopmentPlanOverlay_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EAOEnvironmentalAuditOverlay_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_EMOErosionManagementOverlay_23.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BMOBushfireManagementOverlay_24.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ESOEnvironmentalSignificanceOverlay_25.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RORestructureOverlay_26.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SLOSignificantLandscapeOverlay_27.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HOHeritageOverlay_28.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SCOSpecificControlsOverlay_30.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_VPOVegetationProtectionOverlay_31.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PFI': 'PFI', 'SCHEME_CODE': 'SCHEME_CODE', 'LGA_CODE': 'LGA_CODE', 'LGA': 'LGA', 'ZONE_NUM': 'ZONE_NUM', 'ZONE_STATUS': 'ZONE_STATUS', 'ZONE_CODE': 'ZONE_CODE', 'ZONE_DESCRIPTION': 'ZONE_DESCRIPTION', 'GAZ_BEGIN_DATE': 'GAZ_BEGIN_DATE', 'CODE_PARENT': 'CODE_PARENT', 'ZONE_CODE_GROUP': 'ZONE_CODE_GROUP', 'ZONE_CODE_GROUP_LABEL': 'ZONE_CODE_GROUP_LABEL', 'PFI_CREATED': 'PFI_CREATED', 'UFI': 'UFI', 'UFI_CREATED': 'UFI_CREATED', 'VDPID': 'VDPID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Suburb_33.set('fieldAliases', {'fid': 'fid', 'SAL_CODE21': 'SAL_CODE21', 'SAL_NAME21': 'SAL_NAME21', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM21': 'AREASQKM21', 'LOCI_URI21': 'LOCI_URI21', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LGA_34.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_PropertyBoundaries_35.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROP_PFI': 'PROP_PFI', 'PROP_LGA_CODE': 'PROP_LGA_CODE', 'PROP_PROPNUM': 'PROP_PROPNUM', 'PROP_PROPERTY_TYPE': 'PROP_PROPERTY_TYPE', 'PROP_MULTI_ASSESSMENT': 'PROP_MULTI_ASSESSMENT', 'PROP_STATUS': 'PROP_STATUS', 'Address': 'Address', 'ADD_IS_PRIMARY': 'ADD_IS_PRIMARY', 'ADD_HOUSE_NUMBER_1': 'ADD_HOUSE_NUMBER_1', 'ADD_HOUSE_SUFFIX_1': 'ADD_HOUSE_SUFFIX_1', 'ADD_ROAD_NAME': 'ADD_ROAD_NAME', 'ADD_ROAD_TYPE': 'ADD_ROAD_TYPE', 'ADD_ROAD_SUFFIX': 'ADD_ROAD_SUFFIX', 'ADD_LOCALITY_NAME': 'ADD_LOCALITY_NAME', 'ADD_STATE': 'ADD_STATE', 'ADD_POSTCODE': 'ADD_POSTCODE', 'ADD_NUM_ROAD_ADDRESS': 'ADD_NUM_ROAD_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TRZ2PrincipalRoadNetwork_2.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ3SignificantMunicipalRoad_3.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PCRZPublicConservationandResourceZone_4.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PPRZPublicParkandRecreationZone_5.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ1PublicUseZoneServiceandUtility_6.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ2PublicUseZoneEducation_7.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PUZ6PublicUseZoneLocalGovernment_8.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_C1ZCommercial1Zone_9.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_C2ZCommercial2Zone_10.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IN1ZIndustrial1Zone_11.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_IN3ZIndustrial3Zone_12.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RLZRuralLivingZone_13.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FZFarmingZone_14.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RCZRuralConservationZone_15.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LDRZLowDensityResidentialZone_16.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_GRZGeneralResidentialZone_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PFI': 'TextEdit', 'SCHEME_CODE': 'TextEdit', 'LGA_CODE': 'TextEdit', 'LGA': 'TextEdit', 'ZONE_NUM': 'TextEdit', 'ZONE_STATUS': 'TextEdit', 'ZONE_CODE': 'TextEdit', 'ZONE_DESCRIPTION': 'TextEdit', 'GAZ_BEGIN_DATE': 'DateTime', 'PFI_CREATED': 'DateTime', 'UFI': 'TextEdit', 'UFI_CREATED': 'DateTime', 'ZONE_CODE_GROUP': 'TextEdit', 'ZONE_CODE_GROUP_LABEL': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AEOAirportEnvironsOverlay_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DCPODevelopmentContributionsPlanOverlay_19.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DDODesignandDevelopmentOverlay_20.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DPODevelopmentPlanOverlay_21.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EAOEnvironmentalAuditOverlay_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_EMOErosionManagementOverlay_23.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_BMOBushfireManagementOverlay_24.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ESOEnvironmentalSignificanceOverlay_25.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_RORestructureOverlay_26.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SLOSignificantLandscapeOverlay_27.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_HOHeritageOverlay_28.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_SCOSpecificControlsOverlay_30.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_VPOVegetationProtectionOverlay_31.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PFI': '', 'SCHEME_CODE': '', 'LGA_CODE': '', 'LGA': '', 'ZONE_NUM': '', 'ZONE_STATUS': '', 'ZONE_CODE': '', 'ZONE_DESCRIPTION': '', 'GAZ_BEGIN_DATE': '', 'CODE_PARENT': '', 'ZONE_CODE_GROUP': '', 'ZONE_CODE_GROUP_LABEL': '', 'PFI_CREATED': '', 'UFI': '', 'UFI_CREATED': '', 'VDPID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Suburb_33.set('fieldImages', {'fid': 'TextEdit', 'SAL_CODE21': 'TextEdit', 'SAL_NAME21': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM21': 'TextEdit', 'LOCI_URI21': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LGA_34.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_PropertyBoundaries_35.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROP_PFI': 'TextEdit', 'PROP_LGA_CODE': 'TextEdit', 'PROP_PROPNUM': 'TextEdit', 'PROP_PROPERTY_TYPE': 'TextEdit', 'PROP_MULTI_ASSESSMENT': 'TextEdit', 'PROP_STATUS': 'TextEdit', 'Address': 'TextEdit', 'ADD_IS_PRIMARY': 'TextEdit', 'ADD_HOUSE_NUMBER_1': 'TextEdit', 'ADD_HOUSE_SUFFIX_1': 'TextEdit', 'ADD_ROAD_NAME': 'TextEdit', 'ADD_ROAD_TYPE': 'TextEdit', 'ADD_ROAD_SUFFIX': 'TextEdit', 'ADD_LOCALITY_NAME': 'TextEdit', 'ADD_STATE': 'TextEdit', 'ADD_POSTCODE': 'TextEdit', 'ADD_NUM_ROAD_ADDRESS': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TRZ2PrincipalRoadNetwork_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TRZ3SignificantMunicipalRoad_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PCRZPublicConservationandResourceZone_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PPRZPublicParkandRecreationZone_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ1PublicUseZoneServiceandUtility_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ2PublicUseZoneEducation_7.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PUZ6PublicUseZoneLocalGovernment_8.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_C1ZCommercial1Zone_9.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_C2ZCommercial2Zone_10.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IN1ZIndustrial1Zone_11.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_IN3ZIndustrial3Zone_12.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RLZRuralLivingZone_13.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_FZFarmingZone_14.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RCZRuralConservationZone_15.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LDRZLowDensityResidentialZone_16.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_GRZGeneralResidentialZone_17.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_AEOAirportEnvironsOverlay_18.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DCPODevelopmentContributionsPlanOverlay_19.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DDODesignandDevelopmentOverlay_20.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_DPODevelopmentPlanOverlay_21.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EAOEnvironmentalAuditOverlay_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_EMOErosionManagementOverlay_23.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BMOBushfireManagementOverlay_24.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_ESOEnvironmentalSignificanceOverlay_25.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_RORestructureOverlay_26.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SLOSignificantLandscapeOverlay_27.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_HOHeritageOverlay_28.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LSIOLandSubjecttoInundationOverlay_29.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SCOSpecificControlsOverlay_30.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_VPOVegetationProtectionOverlay_31.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PFI': 'hidden field', 'SCHEME_CODE': 'hidden field', 'LGA_CODE': 'hidden field', 'LGA': 'hidden field', 'ZONE_NUM': 'hidden field', 'ZONE_STATUS': 'hidden field', 'ZONE_CODE': 'hidden field', 'ZONE_DESCRIPTION': 'hidden field', 'GAZ_BEGIN_DATE': 'hidden field', 'CODE_PARENT': 'hidden field', 'ZONE_CODE_GROUP': 'hidden field', 'ZONE_CODE_GROUP_LABEL': 'hidden field', 'PFI_CREATED': 'hidden field', 'UFI': 'hidden field', 'UFI_CREATED': 'hidden field', 'VDPID': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Suburb_33.set('fieldLabels', {'fid': 'hidden field', 'SAL_CODE21': 'hidden field', 'SAL_NAME21': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM21': 'hidden field', 'LOCI_URI21': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_LGA_34.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_PropertyBoundaries_35.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PROP_PFI': 'hidden field', 'PROP_LGA_CODE': 'hidden field', 'PROP_PROPNUM': 'hidden field', 'PROP_PROPERTY_TYPE': 'hidden field', 'PROP_MULTI_ASSESSMENT': 'hidden field', 'PROP_STATUS': 'hidden field', 'Address': 'inline label - always visible', 'ADD_IS_PRIMARY': 'hidden field', 'ADD_HOUSE_NUMBER_1': 'hidden field', 'ADD_HOUSE_SUFFIX_1': 'hidden field', 'ADD_ROAD_NAME': 'hidden field', 'ADD_ROAD_TYPE': 'hidden field', 'ADD_ROAD_SUFFIX': 'hidden field', 'ADD_LOCALITY_NAME': 'hidden field', 'ADD_STATE': 'hidden field', 'ADD_POSTCODE': 'hidden field', 'ADD_NUM_ROAD_ADDRESS': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_PropertyBoundaries_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});