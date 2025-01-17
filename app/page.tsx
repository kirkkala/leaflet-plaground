'use client';

import { useEffect, useState } from 'react';
import { useMapIcon } from './map/components/MapIcon';
import dynamic from 'next/dynamic';
import { Location, LocationCategory, categories, locations } from './config/locations';

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

export default function Home() {
  const icons = useMapIcon();
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LocationCategory>('all');
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sort locations alphabetically by ID
  const sortedLocations = [...locations].sort((a, b) =>
    a.id.localeCompare(b.id, 'fi')
  );

  const filteredLocations = sortedLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleLocationClick = (location: Location) => {
    setActiveLocation(location);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Search and Filter Bar */}
      <div className="p-4 bg-white shadow-md z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Etsi paikkoja..."
            className="p-2 border rounded flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as LocationCategory)}
            className="p-2 border rounded"
          >
            {Object.entries(categories).map(([key, { label, emoji }]) => (
              <option key={key} value={key}>{emoji} {label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Locations List */}
        <div className="w-1/3 bg-white overflow-y-auto h-[calc(100vh-64px)] shadow-md z-10">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Kohteet ({filteredLocations.length})</h2>
            {filteredLocations.map(location => (
              <div
                key={location.id}
                className={`p-3 rounded cursor-pointer hover:bg-gray-100 mb-2 ${
                  activeLocation?.id === location.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => handleLocationClick(location)}
              >
                <h3 className="font-bold">
                  {categories[location.category].emoji} {location.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1">
          {isClient && icons.default && icons.highlighted ? (
            <MapContainer
              center={activeLocation?.position || [60.1699, 24.9384]}
              zoom={activeLocation ? 14 : 12}
              style={{ height: 'calc(100vh - 64px)', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
              />
              {filteredLocations.map((location) => (
                <Marker
                  key={location.id}
                  position={location.position}
                  icon={icons.default && icons.highlighted ?
                    (location.id === activeLocation?.id ? icons.highlighted : icons.default)
                    : undefined}
                  eventHandlers={{
                    click: () => handleLocationClick(location)
                  }}
                >
                  <Popup>
                    <strong>{categories[location.category].emoji} {location.name}</strong>
                    <br />
                    {location.message}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : null}
        </div>
      </div>
    </div>
  );
}
