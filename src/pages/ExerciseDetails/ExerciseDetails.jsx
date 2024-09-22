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
        <div className="exercise-details">
            <div className="exercise-details__video">
            <h1>{exerciseData.name}</h1>
            {/* <iframe className="exercise-details__video-iframe"
                src={`https://www.youtube.com/embed/${exerciseData.video}?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=${exerciseData.video}&modestbranding=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe> */}
            {exerciseData.video && (
    <video width="100%" height="100%" controls autoPlay loop>
        <source src={exerciseData.video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
)}
            </div>
            <section className="exercise-details__info">
            <article className="exercise-details__info-description">
            <h2>
                Description
                <p>{exerciseData.description}</p>
            </h2>
            </article>
            <article className="exercise-details__info-instructions">
            <h2>
                Instructions
                <p>{exerciseData.instructions}</p>
            </h2>
            </article>
            </section>
        </div>
    );
}

export default ExerciseDetails;
