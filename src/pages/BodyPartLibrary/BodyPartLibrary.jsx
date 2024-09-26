import "./BodyPartLibrary.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./BodyPartLibrary.scss";
import { Link } from "react-router-dom";

function BodyPartLibrary() {
    const baseURL = import.meta.env.VITE_API_URL;

    const [bodyPartData, setBodyPartData] = useState([]);

    const getBodyPartData = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/api/body`);
            if (Array.isArray(data)) {
                setBodyPartData(data);
            } else {
                console.error("Expected an array but got:", data);
            }
        } catch (error) {
            console.error("Error fetching library:", error);
        }
    };

    useEffect(() => {
        getBodyPartData();
    }, []);

    return (
        <div className="body-part">
            <h1 className="body-part__title">Exercise Library</h1>
            <h2 className="body-part__title-sub">
                Choose a body part to view associated exercises
            </h2>

            <div className="body-part-container">
                {bodyPartData.map((bodyPart) => (
                    <Link
                        to={`/body/${bodyPart.id}/exercises`}
                        className="body-part-card"
                        key={bodyPart.id}
                        onClick={() => {
                            window.scroll(0, 1);
                        }}
                    >
                        <h2>{bodyPart.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BodyPartLibrary;
