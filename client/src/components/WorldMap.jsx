import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const WorldMap = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        options={{
          disableDefaultUI: true,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#0b1f14" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#34fb58" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
          ],
        }}
      >
        <Marker position={{ lat: 40.7128, lng: -74.006 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default WorldMap;
