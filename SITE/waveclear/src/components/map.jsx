import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

function MapEvents() {
    const map = useMapEvents({
      click: (e) => {
        console.log('Latitude:', e.latlng.lat);
        console.log('Longitude:', e.latlng.lng);
      },
    });
  
    return null;
  }
export default MapEvents;