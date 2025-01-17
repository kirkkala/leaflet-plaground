'use client';

import { useEffect, useState } from 'react';
import type { Icon } from 'leaflet';

export function useMapIcon(): Icon | null {
  const [icon, setIcon] = useState<Icon | null>(null);

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
