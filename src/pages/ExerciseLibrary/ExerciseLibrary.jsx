import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ExerciseLibrary() {

  const baseURL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [bodyPartExerciseData, setBodyPartExerciseData] = useState([]);

  const getBodyPartExerciseData = async () => {
    try {
        const { data } = await axios.get(`${baseURL}/api/body/${id}/exercises`);
        if (Array.isArray(data)) {
            setBodyPartExerciseData(data);
        } else {
            console.error("Expected an array but got:", data);
        }
    } catch (error) {
        console.error("Error fetching library:", error);
    }

  };
  useEffect(() => {
    getBodyPartExerciseData();
}, [id]);
  return (
    <div>
            <div className="body-part-container">
        {bodyPartExerciseData.map((exercise) => (
          <Link to={`/exercises/${exercise.id}`}
            className="body-part-card" key={exercise.id}>
              <h2>{exercise.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExerciseLibrary