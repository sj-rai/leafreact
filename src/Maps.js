import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const icon = L.icon({
    iconUrl:"./pin.png",
    iconSize:[40, 45]
})

export default function Maps() {
    const position = [51.505, -0.09]

    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/s-a-n-/ck9mgl30r3ieg1irzkqrizs96/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicy1hLW4tIiwiYSI6ImNrOW1nOGQxdTA4MGszZWxxcHFjanZ1anEifQ.8tpL_-EP-4ZrmpLNllLYuQ"
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            //mapbox://styles/s-a-n-/ck9mgl30r3ieg1irzkqrizs96
            // https://api.mapbox.com/styles/v1/s-a-n-/ck9mgl30r3ieg1irzkqrizs96/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicy1hLW4tIiwiYSI6ImNrOW1nOGQxdTA4MGszZWxxcHFjanZ1anEifQ.8tpL_-EP-4ZrmpLNllLYuQ
            // url="https://api.mapbox.com/styles/v1/s-a-n-/ck9mgl30r3ieg1irzkqrizs96.html?title=view&access_token=pk.eyJ1Ijoicy1hLW4tIiwiYSI6ImNrOW1nOGQxdTA4MGszZWxxcHFjanZ1anEifQ.8tpL_-EP-4ZrmpLNllLYuQ&zoomwheel=true&fresh=true#11.58/48.8631/2.3544"
            />
            <Marker position={position} icon={icon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}
