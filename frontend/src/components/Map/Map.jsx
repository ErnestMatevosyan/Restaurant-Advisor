import React from 'react';
import GoogleMapReact from 'google-map-react';

// import mapStyles from '../../mapStyle';
import useStyles from './styles';


    const Map = () => {
        const coordinates ={lat: 40.180722491989364, lng:  44.515912855467654,}
        // const TavernYerevan = {lat: 40.18142512583537, lng:   44.510234222334425,}
        const classes = useStyles();
        const renderMarkers = (map, maps) => {
            let marker = new maps.Marker({
            position: { lat: coordinates.lat, lng: coordinates.lng },
            map,
            });
            return marker;
        }
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={16}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}

            >

            </GoogleMapReact>
        </div>
    );
};
    
    

export default Map;

