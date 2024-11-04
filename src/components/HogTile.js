// src/components/HogTile.js
import React from "react";

function HogTile({ hog, onHideHog }) {
    return (
        <div>
            <h2>{hog.name}</h2>
            <button onClick={() => onHideHog(hog.name)}>Hide</button>
            {/* Add more details about the hog if needed */}
        </div>
    );
}

export default HogTile;
