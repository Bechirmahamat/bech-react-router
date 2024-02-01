import React from "react";
import { useRouteError, Link } from "react-router-dom";
import ErrorWrapper from "../Styles/Error";
import img from "../assets/not-found.svg";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <ErrorWrapper>
                <img src={img} alt="" />
                <h3>Ohh!!</h3>
                <p>Page you are looking for is not found.</p>
                <Link to={"/"}>Go Back Home</Link>
            </ErrorWrapper>
        );
    }
    return (
        <ErrorWrapper>
            <h2>something Went Wrong</h2>
        </ErrorWrapper>
    );
};

export default Error;
