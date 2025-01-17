'use client';

import { useEffect, useState } from 'react';
import { useMapIcon } from './map/components/MapIcon';
import dynamic from 'next/dynamic';

// Dynamically import the map components with ssr disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  name: string;
  position: [number, number];
  message: string;
}

export default function Home() {
  const icon = useMapIcon();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const locations: Location[] = [
    {
      name: 'Linnanmäki',
      position: [60.1873, 24.9402],
      message: 'Suomen vanhin ja suosituin huvipuisto! Täältä löytyy hurjia laitteita ja paljon hauskaa tekemistä.'
    },
    {
      name: 'Korkeasaari Zoo',
      position: [60.1750, 24.9889],
      message: 'Tutustu villieläimiin! Korkeasaaressa voit nähdä yli 150 eläinlajia kaikista maanosista.'
    },
    {
      name: 'SEA LIFE Helsinki',
      position: [60.1630, 24.9555],
      message: 'Sukella vedenalaiseen maailmaan! Täällä näet haita, meritähtiä ja paljon muita mereneläviä.'
    },
    {
      name: 'Helsingin lasten kaupunki',
      position: [60.1718, 24.9521],
      message: 'Kaupunginmuseossa sijaitseva Lasten kaupunki on hauska paikka oppia Helsingin historiasta leikkien!'
    },
    {
      name: 'Suomenlinna',
      position: [60.1454, 24.9881],
      message: 'Historiallinen merilinnoitus jossa riittää tutkittavaa: tunneleita, tykkejä ja museoita. Kesäisin piknik-retkien suosikki!'
    }
  ];

  const centerPosition: [number, number] = [60.1699, 24.9384];

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import 'leaflet/dist/leaflet.css';
      `}</style>

      {isClient && icon ? (
        <MapContainer center={centerPosition} zoom={12} style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={location.position}
              icon={icon}
            >
              <Popup>
                <strong>{location.name}</strong>
                <br />
                {location.message}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      ) : null}
    </div>
  );
}
