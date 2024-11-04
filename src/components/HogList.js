// src/components/HogList.js
import React from "react";
import HogTile from "./HogTile"; // Ensure this import path is correct

function HogList({ hogs, hiddenHogs, onHideHog }) {
    return (
        <div>
            {hogs.map((hog) => (
                !hiddenHogs.includes(hog.name) && ( // Check if the hog is hidden
                    <HogTile 
                        key={hog.name} 
                        hog={hog} 
                        onHideHog={onHideHog} 
                    />
                )
            ))}
        </div>
    );
}

export default HogList;
