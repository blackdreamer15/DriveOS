import React from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutoComplete from "./PlacesAutoComplete";
const MapInput = ({ selected, setSelected, close }) => {

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };
  
  const { isLoaded } = useLoadScript({
    libraries: ["places"],
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });
  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }
  return (
    <Modal open className="p-5">
      <Box className="bg-white w-full h-full">
        <div className="z-20 absolute self-center w-full flex justify-center h-96">
          <PlacesAutoComplete selected={selected} setSelected={setSelected} close={close} />
        </div>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={selected ? 17 : 10}
          center={selected?.location || { lat: 5.5427, lng: -0.2565 }}
        >
          {selected && <Marker position={selected?.location} />}
        </GoogleMap>
      </Box>
    </Modal>
  );
};

export default MapInput;
