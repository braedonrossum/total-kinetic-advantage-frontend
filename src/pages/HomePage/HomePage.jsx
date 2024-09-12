import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
    const baseURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [exerciseData, setExerciseData] = useState([]);
    const [formData, setFormData] = useState({
        frequency: "",
        difficulty: "",
        exercise_type: "",
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
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        getExerciseData();
    }, []);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${baseURL}/api/generate`,
                formData
            );
            setFormData({
                frequency: "",
                difficulty: "",
                exercise_type: "",
            });
            console.log(response);
            navigate("/");
        } catch (error) {
            console.error("Error generating program:", error);
            alert("Error generating program!");
        }
    };

    return (
        <div className="home">
            <div className="home__top">
              <Link to="/" className="home__top-link">
                <button className="home__top-button">Program Generator</button>
              </Link>
              <Link to="/body" className="home__top-link">
                <button className="home__top-button">Exercise Library</button>
              </Link>
            </div>

            <form className="program" onSubmit={handleFormSubmit}>
                <label htmlFor="frequency">Days Per Week</label>
                <input
                    id="frequency"
                    className="program-input program-input__frequency"
                />
                <label>Current Fitness Level</label>
                <select
                    className="program-input program-input__difficulty"
                    name="difficulty"
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
                                        event.difficulty ===
                                        exercise.difficulty
                                )
                        )
                        .map((exercise, index) => (
                            <option key={index} value={exercise.id}>
                                {exercise.difficulty}
                            </option>
                        ))}
                </select>
                <label>Goal</label>
                <select
                    className="program-input program-input__type"
                    name="exercise_type"
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
