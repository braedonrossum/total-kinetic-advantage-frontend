import "./ProgramPage.scss";
import { Link } from "react-router-dom";

function ProgramPage({ programData }) {
    console.log(programData);
    return (
        <div className="program-page">
            <h1 className="program-page__title">Your Exercise Program</h1>
            <h2>Click on an exercise to be taken to the details page</h2>
            {programData.length > 0 ? (
                programData.map((day, dayIndex) => (
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
                                    <Link to={`/exercises/${exercise.id}`}>
                                        <strong className="exercise-name">
                                            {exercise.name}
                                        </strong>
                                    </Link>
                                    <p>Sets: {exercise.sets}</p>
                                    <p>Reps: {exercise.reps}</p>
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
