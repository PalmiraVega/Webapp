import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapProps {
  onClick: () => void;
}

const Map: React.FC<MapProps> = ({ onClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng] = useState(-103.3842);
  const [lat] = useState(20.7245);
  const [zoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);

    // Disable map interactions
    map.current.scrollZoom.disable();
    map.current.boxZoom.disable();
    map.current.dragRotate.disable();
    map.current.dragPan.disable();
    map.current.keyboard.disable();
    map.current.doubleClickZoom.disable();
    map.current.touchZoomRotate.disable();
  }, [lng, lat, zoom]);

  return (
    <div className="relative h-64 rounded-lg overflow-hidden mb-4" onClick={onClick}>
      <div ref={mapContainer} className="h-full w-full" />
      <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md">
        <MapPin className="h-6 w-6 text-teal-600" />
      </div>
    </div>
  );
};

export default Map;