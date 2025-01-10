import React from "react";
import Doll from "../Images/Doll.jpeg";
import dall1 from "../Images/dall1.jpeg";
import doll2 from "../Images/doll2.jpeg";
import doll3 from "../Images/doll3.jpg";
import "./Team.css";

function Team() {
    return (
        <>
        <div>
            <h1>OUR TEAM</h1>
        </div>
        
            <div className="team-container">
                <img src={Doll} alt="Name1" />
                <img src={dall1} alt="Name2" />
                <img src={doll2} alt="Name3" />
                <img src={doll3} alt="Name4" />
            </div>
        </>
    );
}

export default Team;
