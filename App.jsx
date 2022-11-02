
import { useState } from 'react';
import './App.css';
import ReactMapGL from 'react-map-gl'

function App() {
  let[viewport,setViewport] =useState({
    latitude:37.7577,
    longitude:-122.4376,
    zoom:8,
    width:window.innerWidth,
    height:window.innerHeight
  });
  return (
  
    <ReactMapGL 
    mapboxApiAccessToken={"pk.eyJ1IjoiamF5cHJha2FzaHBhdGhhayIsImEi0iJja2JrbGNrbnoxMDBoMnlsc2diYWxtNG1kIn0.0zeFUEg9Vtc5dEjgDbUhCA"}

    {...viewport}
   
    onViewportChange={(newView)=>setViewport(newView)}></ReactMapGL>
    
  );
}

export default App;
 