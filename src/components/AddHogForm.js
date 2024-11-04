import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [weight, setWeight] = useState(0);
    const [medal, setMedal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name,
            specialty,
            greased,
            weight,
            "highest medal achieved": medal,
            image: "https://via.placeholder.com/150" // Placeholder image
        };
        onAddHog(newHog);
        // Clear form fields
        setName("");
        setSpecialty("");
        setGreased(false);
        setWeight(0);
        setMedal("");
    };

    return (
        <form onSubmit={handleSubmit} className="addHogForm">
            <h3>Add a New Hog</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                required
            />
            <input
                type="text"
                placeholder="Highest Medal Achieved"
                value={medal}
                onChange={(e) => setMedal(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />
                Greased
            </label>
            <button type="submit">Add Hog</button>
        </form>
    );
}

export default AddHogForm;