import React from 'react'; // Importing React
import ReactDOM from 'react-dom'; // Importing ReactDOM for rendering
import App from './App'; // Importing App component
import './index.css'; // Importing index.css for styling

ReactDOM.render( 
    <React.StrictMode> // StrictMode is a tool for highlighting potential problems in an application
        <App /> 
    </React.StrictMode>,
    document.getElementById('root') 
); // Rendering App component in root div
