import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified', 
        steps: false,
        access_token: 'pk.eyJ1IjoicGFzdGl0byIsImEiOiJjbGxjcTFkdmgwMnk5M3BwNHZ1M3VxM2R2In0.HRk4tbrBlVwzYeWCrN4p1g'
    }
})


export default directionsApi;