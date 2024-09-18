import { useState } from "react";
import "./ProgramPage.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProgramPage({ programData }) {

  const [storedProgramData, setStoredProgramData] = useState([]);

  useEffect(() => {
      const data = localStorage.getItem("exerciseProgram");
      if (data) {
          setStoredProgramData(JSON.parse(data));
      }
  }, []);

  const dataToDisplay = programData.length > 0 ? programData : storedProgramData;

    return (
      <div className="program-page">
      <h1 className="program-page__title">Your Exercise Program</h1>
      <h2>Click on an exercise to be taken to the details page</h2>
      {dataToDisplay.length > 0 ? (
          dataToDisplay.map((day, dayIndex) => (
              <div key={dayIndex} className="program-page__day">
                  <h2 className="program-page__day-title">
                      Day {dayIndex + 1}
                  </h2>
                  <ul className="program-page__list">
                      {day.exercises.map((exercise, exerciseIndex) => (
                          <li
                              key={exerciseIndex}
                              className="program-page__list-item"
                          >
                              <p>Exercise {exerciseIndex + 1}</p>
                              <div className="program-page__list-item-details">
                              <Link to={`/exercises/${exercise.id}`}>
                                  <strong className="exercise-name">
                                      {exercise.name}
                                  </strong>
                              </Link>
                              <div className="program-page__list-item-ranges">
                              <p>Sets: {exercise.sets}</p>
                              <p>Reps: {exercise.reps}</p>
                              </div>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          ))
      ) : (
          <p>No program data available</p>
      )}
  </div>
);
}

export default ProgramPage;
