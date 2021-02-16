import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Blumenau</strong>
          <strong>Santa Catarina</strong>
        </footer>

        <MapContainer
          center={[-26.9015848, -49.0918178]}
          zoom={15}
          style={{ width: '100%', height: '100%' } }
        >
          <TileLayer url="https://a.title.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>

      </aside>
    </div>
  );
}

export default OrphanagesMap;