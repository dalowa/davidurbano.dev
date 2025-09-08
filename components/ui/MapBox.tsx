'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default markers in react-leaflet
/* delete (Icon.Default.prototype)._getIconUrl; */
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapBox() {
  // Lima, Peru coordinates
  const limaPosition: [number, number] = [-12.0623, -77.0365];

  return (
    <div className="max-w-[500px] mx-auto aspect-square rounded-lg overflow-hidden border-2 border-red-dalowa/30">
      <MapContainer
        center={limaPosition}
        zoom={3}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={limaPosition}>
          <Popup>
            <div className="text-center">
              <strong>Lima, Perú</strong><br />
              Home of David Urbano 🏠
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}