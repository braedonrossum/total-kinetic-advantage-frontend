import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/images/arrow.svg";

function HomePage({ setProgramData }) {
    const baseURL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [exerciseData, setExerciseData] = useState([]);
    const [formData, setFormData] = useState({
        frequency: 0,
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

        const { frequency, fitnessLevel, exerciseType } = formData;

        if (!frequency || !fitnessLevel || !exerciseType) {
            alert("Please fill out the form completely before submitting.");
            return;
        }

        try {
            const response = await axios.post(
                `${baseURL}/api/generate`,
                formData
            );
            setFormData({
                frequency: 0,
                fitnessLevel: "",
                exerciseType: "",
            });
            if (!frequency || !fitnessLevel || !exerciseType) {
                alert("Please fill out form");
            }
            localStorage.setItem(
                "exerciseProgram",
                JSON.stringify(response.data)
            );
            setProgramData(response.data);
            navigate("/program");
        } catch (error) {
            console.error("Error generating program:", error);
            alert("Error generating program!");
        }
    };

    return (
        <div className="home">
            <form className="program" onSubmit={handleFormSubmit} netlify>
                <div className="program-card">
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
                        value={formData.fitnessLevel}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled defaultValue hidden>
                            Please select
                        </option>
                        {[
                            ...new Set(
                                exerciseData
                                    .flatMap((exercise) =>
                                        exercise.difficulty.split(", ")
                                    )
                                    .map((difficulty) =>
                                        difficulty.trim().toLowerCase()
                                    )
                            ),
                        ].map((difficulty, index) => (
                            <option
                                className="program-input"
                                key={index}
                                value={difficulty}
                            >
                                {difficulty.charAt(0).toUpperCase() +
                                    difficulty.slice(1)}
                            </option>
                        ))}
                    </select>
                    <label>Goal</label>
                    <select
                        className="program-input program-input__type"
                        name="exerciseType"
                        id="exercise_type"
                        value={formData.exerciseType}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled defaultValue hidden>
                            Please select
                        </option>
                        {[
                            ...new Set(
                                exerciseData.flatMap((exercise) =>
                                    exercise.exercise_type.split(", ")
                                )
                            ),
                        ].map((type, index) => (
                            <option
                                className="program-input"
                                key={index}
                                value={type}
                            >
                                {type}
                            </option>
                        ))}
                    </select>
                    <button className="program-input__button"
                    onClick={() => {
                        window.scroll(0, 1);
                    }}>Generate!</button>
                </div>
            </form>
            <article className="motivation">
                <h2 className="motivation__hero">
                    Discover your Total Kinetic Advantage. Complete the form to
                    begin your journey
                </h2>
                <h2 className="motivation__hero-desktop">
                Unlock your full potential with Total Kinetic Advantage. Let us guide you in creating a personalized fitness program that fits your unique goals and lifestyle. Fill out the form to get started on your journey to a healthier, stronger you
                </h2>
                <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </article>
        </div>
    );
}

export default HomePage;
