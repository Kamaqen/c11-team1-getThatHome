import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ address }) => {
    const [latitud, setLatitud] = useState(null);
    const [longitud, setLongitud] = useState(null);
    const [coordinatesFound, setCoordinatesFound] = useState(true);

    useEffect(() => {
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            address
        )}`;

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
                    setCoordinatesFound(false);
                }
            })
            .catch((error) => {
                console.error("Error al obtener las coordenadas: " + error);
                setCoordinatesFound(false);
            });
    }, [address]);

    useEffect(() => {
        if (!coordinatesFound) {
            const defaultAddress = "Insurgentes 1079";
            const defaultApiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                defaultAddress
            )}`;

            fetch(defaultApiUrl)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.length > 0) {
                        const lat = parseFloat(data[0].lat);
                        const lon = parseFloat(data[0].lon);
                        setLatitud(lat);
                        setLongitud(lon);
                        setCoordinatesFound(true);
                    } else {
                        console.error(
                            "No se encontraron coordenadas para la dirección por defecto."
                        );
                    }
                })
                .catch((error) => {
                    console.error(
                        "Error al obtener las coordenadas por defecto: " + error
                    );
                });
        }
    }, [coordinatesFound]);

    useEffect(() => {
        if (latitud !== null && longitud !== null) {
            const map = L.map("map").setView([latitud, longitud], 15);

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            ).addTo(map);

            L.marker([latitud, longitud])
                .addTo(map)
                .bindPopup(address)
                .openPopup();
        }
    }, [latitud, longitud, address]);

    return <div id="map" style={{ height: "400px" }}></div>;
};

export default Maps;
