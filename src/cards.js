import React, {useState} from 'react';

import "./App.css"


export default function Card({orszag, fovaros}) {
    //text ami irja az allapotot,  a setText ami megvaltoztatja az allapotot
    const [isFront,changeFace]= useState(true);
    function handleClick() {
        // lehetne irni ugy , hogy setText( function(oldstate) { ......}), de nyil fugvennyel
      changeFace(oldState => !oldState);
    }
    const text = isFront ? orszag : fovaros;
    const sideClass = isFront ? "front" : "back";
    const classList = `card ${sideClass}`;
    return (
        <div className={classList} onClick={handleClick}>
        {text}
            
            </div>


    );
  } 