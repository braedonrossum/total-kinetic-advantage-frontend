import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage({ setProgramData }) {
    const baseURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [exerciseData, setExerciseData] = useState([]);
    const [formData, setFormData] = useState({
        frequency: 2,
        fitnessLevel: "",
        exerciseType: "",
    });

    const getExerciseData = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/api/exercises`);
            if (Array.isArray(data)) {
                setExerciseData(data);
            } else {
                console.error("Expected an array but got:", data);
            }
        } catch (error) {
            console.error("Error fetching exercises:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        getExerciseData();
    }, []);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post(
                `${baseURL}/api/generate`,
                formData
            );
            setFormData({
                frequency: 2,
                fitnessLevel: "",
                exerciseType: "",
            });
            console.log(response);
            setProgramData(response.data);
            navigate("/program");
        } catch (error) {
            console.error("Error generating program:", error);
            alert("Error generating program!");
        }
    };

    return (
        <div className="home">
            <form className="program" onSubmit={handleFormSubmit}>
                <label htmlFor="frequency">Days Per Week</label>
                <input
                    onChange={handleInputChange}
                    name="frequency"
                    id="frequency"
                    className="program-input program-input__frequency"
                />
                <label>Current Fitness Level</label>
                <select
                    className="program-input program-input__difficulty"
                    name="fitnessLevel"
                    id="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                >
                    <option value="" disabled defaultValue hidden>
                        Please select
                    </option>
                    {exerciseData
                        .filter(
                            (exercise, index, self) =>
                                index ===
                                self.findIndex(
                                    (event) =>
                                        event.difficulty === exercise.difficulty
                                )
                        )
                        .map((exercise, index) => (
                            <option
                                key={index}
                                value={exercise.id}
                                className="difficulty-dropdown"
                            >
                                {exercise.difficulty}
                            </option>
                        ))}
                </select>
                <label>Goal</label>
                <select
                    className="program-input program-input__type"
                    name="exerciseType"
                    id="exercise_type"
                    value={formData.exercise_type}
                    onChange={handleInputChange}
                >
                    <option value="" disabled defaultValue hidden>
                        Please select
                    </option>
                    {exerciseData
                        .filter(
                            (exercise, index, self) =>
                                index ===
                                self.findIndex(
                                    (event) =>
                                        event.exercise_type ===
                                        exercise.exercise_type
                                )
                        )
                        .map((exercise, index) => (
                            <option key={index} value={exercise.id}>
                                {exercise.exercise_type}
                            </option>
                        ))}
                </select>
                <button className="program-input__button">Generate!</button>
            </form>
        </div>
    );
}

export default HomePage;
