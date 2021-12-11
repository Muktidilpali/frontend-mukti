import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar(){
return(
<div className="navbar">
    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d95d03767dd830006a295b6%2FGETTY%2F960x0.jpg%3Ffit%3Dscale"></img>
    <NavLink exact to="/">Products</NavLink>
    <NavLink  to="/about">About</NavLink>
    <NavLink  to="faq">FAQ</NavLink>
    <NavLink  to="/contact">Contact</NavLink>


</div>
)

}