import react from 'react'; // Importing React for using React library 
import video from '../assets/video.mp4'; // Importing video from assets folder

const Main = () => { // Main component function 
    return (
            <div classname = 'main'>
                <video src = {video} autoPlay loop muted /> // Video tag with video source, controls, autoPlay and loop attributes
                <div classname = 'content'>
                    <h1>Les aventures de Luku</h1>
            </div>
        </div>
    );
}

export default Main; // Exporting Main component