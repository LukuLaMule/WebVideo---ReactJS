import React from "react";
import video from '../assets/video.MP4';
import { Helmet } from 'react-helmet'; // Importing Helmet for changing the title of the page


const Main = () => {
    return (
        <div>
        <Helmet>
        <title>Rando</title>
        </Helmet>

        

            <div className = 'main'>
                <video src = {video} autoPlay loop muted /> 
                <div className = 'content'>
                    <h1>Randonnée Pic Pétragème - 20 Août 2023</h1>
            </div>
            </div>
        </div>
    );
}

export default Main; 