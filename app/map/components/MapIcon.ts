'use client';

import { useEffect, useState } from 'react';
import type { Icon } from 'leaflet';

export function useMapIcon() {
  const [icons, setIcons] = useState<{
    default: Icon | null;
    highlighted: Icon | null;
  }>({ default: null, highlighted: null });

  useEffect(() => {
    import('leaflet').then((L) => {
      const DefaultIcon = L.default.Icon.extend({
        options: {
          iconUrl: '/marker.svg',
          iconRetinaUrl: '/marker.svg',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        }
      });

      const HighlightedIcon = L.default.Icon.extend({
        options: {
          iconUrl: '/marker-highlighted.svg',
          iconRetinaUrl: '/marker-highlighted.svg',
          iconSize: [30, 49], // Slightly larger
          iconAnchor: [15, 49],
          popupAnchor: [1, -40],
        }
      });

      setIcons({
        default: new DefaultIcon(),
        highlighted: new HighlightedIcon()
      });
    });
  }, []);

  return icons;
}
