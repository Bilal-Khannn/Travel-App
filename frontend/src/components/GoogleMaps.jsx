import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const zoom = 10;

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <div style={{ height: "450px", width: "70%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
