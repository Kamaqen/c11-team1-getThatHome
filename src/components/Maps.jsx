import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ address }) => {
    console.log(address);
    const direccion = address;
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        direccion
    )}`;

    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const lat = parseFloat(data[0].lat);
                    const lon = parseFloat(data[0].lon);
                    setLatitud(lat);
                    setLongitud(lon);
                } else {
                    console.error(
                        "No se encontraron coordenadas para la dirección proporcionada."
                    );
                }
            })
            .catch((error) => {
                console.error("Error al obtener las coordenadas: " + error);
            });
    }, [apiUrl]);

    useEffect(() => {
        if (latitud !== null && longitud !== null) {
            const map = L.map("map").setView([latitud, longitud], 15);

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ).addTo(map);

            L.marker([latitud, longitud])
                .addTo(map)
                .bindPopup(direccion)
                .openPopup();
        }
    }, [latitud, longitud]);

    return <div id="map" style={{ height: "400px" }}></div>;
};

export default Maps;
