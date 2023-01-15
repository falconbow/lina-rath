import React from "react";
import './Body.scss'
import Header from "../Header/Header";
import Titlecard from "../TitleCard/Titlecard";


export default function Body() {
    return (
        <div className="body">
            <Header/>
            <Titlecard/>
        </div>
    )
}