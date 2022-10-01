import { FC } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import styles from './Map.module.scss';
import Leaflet, { LatLngExpression } from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-routing-machine';

const Map: FC = () => {
 const CreateRouterMachineLayer = () =>
  Leaflet.Routing.control({
   waypoints: [
    Leaflet.latLng(33.52001088075479, 36.26829385757446),
    Leaflet.latLng(33.50546582848033, 36.29547681726967),
   ],
   lineOptions: {
    styles: [{ color: '#DC2626', weight: 3 }],
    extendToWaypoints: true,
    missingRouteTolerance: 0,
   },
   show: false,
   addWaypoints: false,
   routeWhileDragging: true,
   fitSelectedRoutes: true,
   showAlternatives: false,
  });
 const RoutingMachine = createControlComponent(CreateRouterMachineLayer);

 return (
  <MapContainer
   className={styles.mapContainer}
   center={[51.505, -0.09]}
   zoom={13}
   scrollWheelZoom={false}
  >
   <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
   />
   <Marker position={[51.505, -0.09]}>
    <Popup>
     A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
   </Marker>
   <RoutingMachine />
  </MapContainer>
 );
};
export default Map;
