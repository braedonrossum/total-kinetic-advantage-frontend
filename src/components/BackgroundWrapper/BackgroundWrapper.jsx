import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./BackgroundWrapper.scss";

const BackgroundWrapper = ({ children }) => {
    const location = useLocation();

    const backgroundClassMap = {
        "/": "home-background",
        "/body": "body-background",
        "/body/:id/exercises": "exercise-library-background",
        "/exercises/:id": "exercise-details-background",
        "/program": "program-background",
    };
    let currentClass = backgroundClassMap[location.pathname] || "";

    if (/^\/body\/\d+\/exercises$/.test(location.pathname)) {
        currentClass = "exercise-library-background";
    } else if (/^\/exercises\/\d+$/.test(location.pathname)) {
        currentClass = "exercise-details-background";
    }

    return (
        <div className={`background-wrapper ${currentClass}`}>{children}</div>
    );
};

export default BackgroundWrapper;
