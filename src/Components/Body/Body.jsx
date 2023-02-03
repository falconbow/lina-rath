import React from "react";
import './Body.scss'
import Header from "../Header/Header";
import Titlecard from "../TitleCard/Titlecard";
import { projectStructure } from "../../utils/api";
import Infoblock from "../InfoBlock/Infoblock";


export default function Body() {
    console.log(projectStructure);
    return (
        <div className="body">
            <Header/>
            <Titlecard/>
            {projectStructure.map(block => <Infoblock name={block.name} type={block.type} contents={block.contents}/>)}
        </div>
    )
}