import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const pinIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Updated charging stations with available spot numbers
const chargingStations = [
  {
    name: 'Ampelokipoi, Athens',
    coords: [37.992, 23.732],
    spots: 90,
    availableSpots: 4,
    availableSpotNumbers: [1, 5, 23, 45], // Available spot numbers
  },
  {
    name: 'Pylaia, Thessaloniki',
    coords: [40.595, 22.986],
    spots: 5,
    availableSpots: 2,
    availableSpotNumbers: [2, 4],
  },
  {
    name: 'Agria, Volos',
    coords: [39.335, 23.013],
    spots: 20,
    availableSpots: 2,
    availableSpotNumbers: [10, 15],
  },
  {
    name: 'Center, Lamia',
    coords: [38.899, 22.434],
    spots: 30,
    availableSpots: 5,
    availableSpotNumbers: [1, 6, 12, 19, 25],
  },
  {
    name: 'Center, Katerini',
    coords: [40.272, 22.506],
    spots: 10,
    availableSpots: 3,
    availableSpotNumbers: [2, 7, 9],
  },
  {
    name: 'Nea Smirni, Athens',
    coords: [37.944, 23.716],
    spots: 5,
    availableSpots: 3,
    availableSpotNumbers: [1, 3, 5],
  },
  {
    name: 'Kastro, Ioannina',
    coords: [39.667, 20.850],
    spots: 43,
    availableSpots: 4,
    availableSpotNumbers: [8, 12, 20, 31],
  },
];

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mapInstance = L.map('map').setView([40.7128, -74.006], 13);
    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    chargingStations.forEach((station) => {
      const availableSpotsText = station.availableSpotNumbers
        .map((spot) => `<li>Spot #${spot}</li>`)
        .join('');

      const popupContent = `
        <div>
          <strong>${station.name}</strong><br />
          Charging Spots: ${station.spots}<br />
          Available Spots: ${station.availableSpots}<br />
          <ul>${availableSpotsText}</ul>
          ${
            station.availableSpots > 0
              ? `<button class="reserve-button" data-station='${JSON.stringify(station)}'>Reserve</button>`
              : `<span style="color:red;">No spots available</span>`
          }
        </div>
      `;

      L.marker(station.coords, { icon: pinIcon })
        .addTo(mapInstance)
        .bindPopup(popupContent);
    });

    const onMapClick = (event) => {
      // Check if the clicked element has the 'reserve-button' class
      if (event.target.classList.contains('reserve-button')) {
        // Parse the station data embedded in the 'data-station' attribute of the button
        const station = JSON.parse(event.target.getAttribute('data-station'));
    
        // Get the first available spot from the station's available spots
        const spotNumber = station.availableSpotNumbers[0]; 
    
        // Navigate to the 'Reservation Details Page' and pass the station data and reserved spot
        navigate(`/reservation-details`, { state: { ...station, reservedSpot: spotNumber } });
      }
    };

    document.addEventListener('click', onMapClick);

    return () => {
      mapInstance.remove();
      document.removeEventListener('click', onMapClick);
    };
  }, [navigate]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);

          if (map) {
            map.setView([latitude, longitude], 13);
            L.marker([latitude, longitude], { icon: pinIcon })
              .addTo(map)
              .bindPopup('You are here!')
              .openPopup();
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
          alert('Unable to fetch your location.');
        }
      );
    }
  }, [map]);

  return <div id="map" style={{ height: '100vh', width: '100%' }}></div>;
};

export default MapPage;