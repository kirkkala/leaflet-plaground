'use client';

import { useEffect, useState } from 'react';

export function useMapIcon() {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Only import and create the icon on the client side
    import('leaflet').then((L) => {
      const MapIcon = L.default.Icon.extend({
        options: {
          iconUrl: '/marker.svg',
          iconRetinaUrl: '/marker.svg',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        }
      });
      setIcon(new MapIcon());
    });
  }, []);

  return icon;
}
