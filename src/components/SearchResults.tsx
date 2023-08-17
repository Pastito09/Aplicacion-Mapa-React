import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { LoadingPlaces } from "./LoadingPlaces";
import { Feature } from "../interfaces/places";


export const SearchResults = () => {

    const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );
    const { map, getRouteBetweenPoints } = useContext(MapContext);

    const [activePlace, setActivePlace] = useState('');

    const onPlaceClick = ( place: Feature ) => {
        const [ lng, lat ] = [ place.properties.coordinates.longitude, place.properties.coordinates.latitude ];
        setActivePlace( place.id );
        map?.flyTo({
            zoom: 14,
            center: [ lng, lat]
        })
    }

    const getRoute = ( place: Feature ) => {
        if ( !userLocation ) return;
        const [ lng, lat ] = [ place.properties.coordinates.longitude, place.properties.coordinates.latitude ];

        getRouteBetweenPoints( userLocation, [lng, lat] );
    }

    if ( isLoadingPlaces ) {
        return <LoadingPlaces />;
    }

    if ( places.length === 0 ) {
        return <></>;
    }

  return (
    <ul className="list-group mt-3">

        {
            places.map( place => (
                <li
                    key={ place.id }
                    className={`list-group-item list-group-item-action pointer ${ activePlace === place.id  ? 'active' : '' } `}
                    onClick={ () => onPlaceClick( place ) }
                >
                    <h6>{ place.properties.context.place?.name }</h6>
                    <p
                        style={{
                            fontSize: '12px'
                        }}
                    >
                        { place.properties.place_formatted }
                    </p>

                    <button 
                        onClick={ () => getRoute(place) }
                        className={`btn btn-sm ${ activePlace === place.id ? 'btn-outline-light' : 'btn-outline-primary' } `}
                    >
                        Direcciones
                    </button>

                </li>
            ))
        }


        

    </ul>
  )
}
