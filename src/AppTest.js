import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import { Icon } from 'leaflet';
const TestMap = () => {
  // Default coordinates (Morocco)
  const [position, setPosition] = useState([31.7917, -7.0926]);
  const [address, setAddress] = useState('');
  const [marker, setMarker] = useState(null);

  const MyIcon= new Icon({
      iconUrl:"placeholder.png",
      iconSize:[38,38]
    })
  // Function to geocode the address
  const geocodeAddress = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        setMarker([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert('Address not found!');
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
    }
  };

  return (
    <div>
      {/* Address Input */}
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter an address"
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={geocodeAddress} style={{ padding: '10px' }}>
          Search
        </button>
      </div>

      {/* Map */}
      <MapContainer center={position} zoom={13} style={{ height: '80vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker for the searched location */}
        {marker && (
          <Marker position={marker} icon={MyIcon}>
            <Popup>
              Your searched location. <br /> Coordinates: {marker[0]}, {marker[1]}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default TestMap;








































// App.js
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';  // Required for leaflet styles
// import { Icon } from 'leaflet';

// const App = () => {
// const MyIcon= new Icon({
//   iconUrl:"placeholder.png",
//   iconSize:[38,38]
// })

//   return (
//     <div style={{ height: "50vh",width:"40vw" }}>
//       <MapContainer center={[33.8523123 , -6.9354057]} zoom={10} style={{ width: '100%', height: '100%' }}>
//         {/* TileLayer for map rendering */}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='Voitures Location'
//         />
//         {/* Add a Marker */}
//         <Marker position={[33.8523123 , -6.9354057]} icon={MyIcon}>
//           <Popup>marker 1</Popup>
//         </Marker>
//         <Marker position={[33.8523123 , -6.9354059]} icon={MyIcon}>
//           <Popup>marker 2</Popup>
//         </Marker>
//         <Marker position={[33.8523123 , -6.9354060]} icon={MyIcon}>
//           <Popup>marker 3</Popup>
//         </Marker>
        
//       </MapContainer>
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import { GoogleMap, useJsApiLoader,MarkerF } from '@react-google-maps/api'

// const containerStyle = {
//   width: '400px',
//   height: '400px',
// }

// const center = {
//   lat: 59.99,
//   lng:  59.99,
// }
// const coordonnes=[
//   {
//     lat: 59.99,
//     lng:  59.99,
//   },{
//     lat: 59.99,
//     lng:  59.99,
//   },{
//     lat: 59.99,
//     lng:  59.99,
//   }
// ]

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyBHxppgCXTKSn0QWKb-9U9ti6crl4xdWZU',
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center)
//     map.fitBounds(bounds)

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {
//         coordonnes.map((coordonne,index)=>{
//             <MarkerF position={coordonne}></MarkerF>
//         })
//       }
      
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   )
// }

// export default MyComponent


