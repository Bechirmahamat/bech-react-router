import { useRouteError } from "react-router-dom";

const SingleError = () => {
    const error = useRouteError();
    return (
        <div>
            <h3>{error.message}</h3>
        </div>
    );
};
export default SingleError;
