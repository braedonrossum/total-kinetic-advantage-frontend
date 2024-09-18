import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ExerciseDetails.scss"

function ExerciseDetails() {
    const baseURL = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [exerciseData, setExerciseData] = useState({});

    const getExerciseData = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/api/exercises/${id}`);
            console.log(data);
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
    }, [id]);
    console.log(exerciseData.video);
    return (
        <div>
            <h1>{exerciseData.name}</h1>
            <div className="exercise-video-container">
            <iframe className="exercise-video-container__item"
                // width="396"
                // height="223"
                src={`https://www.youtube.com/embed/${exerciseData.video}?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=${exerciseData.video}&modestbranding=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
            <h2>
                Description
                <p>{exerciseData.description}</p>
            </h2>
            <h2>
                Instructions
                <p>{exerciseData.instructions}</p>
            </h2>
        </div>
    );
}

export default ExerciseDetails;
