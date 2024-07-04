import './App.css';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div>
  <MapContainer center={[-.1318, 36.81]} zoom={7}>
    <TileLayer 
    attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
  </MapContainer>
  </div>
  );
}

export default App;
