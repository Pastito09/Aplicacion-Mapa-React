import axios from 'axios';

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/search/geocode/v6/forward?q=',
    params: {
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoicGFzdGl0byIsImEiOiJjbGxjcTFkdmgwMnk5M3BwNHZ1M3VxM2R2In0.HRk4tbrBlVwzYeWCrN4p1g'
    }
})


export default searchApi;