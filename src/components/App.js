import React, { useState } from "react";
import HogList from "./HogList";
import Nav from "./Nav";
import AddHogForm from "./AddHogForm";
import hogsData from "../porkers_data.js";
import Filter from "./Filter.js";

function App() {
    const [hogs, setHogs] = useState(hogsData); // Initialize state with hogsData
    const [filterGreased, setFilterGreased] = useState(false);
    const [sortCriteria, setSortCriteria] = useState("name");
    const [hiddenHogs, setHiddenHogs] = useState([]);

    // Function to hide a hog by name
    const handleHideHog = (name) => {
        setHiddenHogs((prev) => [...prev, name]);
    };

    // Function to add a new hog
    const handleAddHog = (newHog) => {
        setHogs((prev) => [...prev, newHog]);
    };

    // Filter hogs based on whether they are greased
    const filteredHogs = filterGreased
        ? hogs.filter((hog) => hog.greased)
        : hogs;

    // Sort hogs based on selected criteria (name or weight)
    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortCriteria === "name") {
            return a.name.localeCompare(b.name);
        }
        return a.weight - b.weight;
    });

    return (
        <div className="App">
            <Nav />
            <Filter 
                filterGreased={filterGreased} 
                setFilterGreased={setFilterGreased} 
                sortCriteria={sortCriteria} 
                setSortCriteria={setSortCriteria} 
            />
            <AddHogForm onAddHog={handleAddHog} />
            <div className="ui grid container">
                <HogList 
                    hogs={sortedHogs} 
                    hiddenHogs={hiddenHogs} 
                    onHideHog={handleHideHog} 
                />
            </div>
        </div>
    );
}

export default App;
