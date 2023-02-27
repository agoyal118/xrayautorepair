import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl, Popup } from "react-map-gl";
import styles from "../styles/components/Mapbox.module.css";
import { useState } from "react";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const LONGITUDE_VAR = -89.47297;
const LATITUDE_VAR = 41.83738;

function Mapbox() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((showPopup) => !showPopup);
  };

  return (
    <div className={styles.map}>
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: LONGITUDE_VAR,
          latitude: LATITUDE_VAR,
          zoom: 12,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onRender={(event) => event.target.resize()}
      >
        <Marker
          name="Ethos Family Dental"
          longitude={LONGITUDE_VAR}
          latitude={LATITUDE_VAR}
          color="red"
          onClick={togglePopup}
        />
        {showPopup && (
          <Popup
            longitude={LONGITUDE_VAR}
            latitude={LATITUDE_VAR}
            maxWidth="200px"
            anchor="top"
            closeOnClick={false}
            onClose={togglePopup}
          >
            X-Ray Auto Repair
            <br /> 804 Franklin Grove Rd, Dixon, IL 61021
          </Popup>
        )}
        <NavigationControl />
      </Map>
    </div>
  );
}

export default Mapbox;
