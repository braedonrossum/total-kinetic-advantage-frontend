import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ExerciseDetails() {
    const baseURL = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [exerciseData, setExerciseData] = useState({});

    const getExerciseData = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/api/exercises/${id}`);
            if (data) {
                setExerciseData(data);
            } else {
                console.error("Expected an array but got:", data);
            }
        } catch (error) {
            console.error("Error fetching exercises:", error);
        }
    };
    useEffect(() => {
        getExerciseData();
    }, []);

    return (
        <div>
            <h1>{exerciseData.name}</h1>
            <p>Description: {exerciseData.description}</p>
            <p>Instructions: {exerciseData.instructions}</p>
            <p>Sets: {exerciseData.sets}</p>
            <p>Reps: {exerciseData.reps}</p>
            <video src={exerciseData.video} controls />
        </div>
    );
}

export default ExerciseDetails;
