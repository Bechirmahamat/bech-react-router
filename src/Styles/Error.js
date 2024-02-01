import styled from "styled-components";

const ErrorWrapper = styled.div`
    height: 100vh;
    width: 90%;
    max-width: 1150px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
        display: block;
        width: 90%;
        max-width: 600px;
        margin: 0 auto;
        max-height: 40vh;
        margin-top: -3rem;
    }
    h3 {
        margin: 1rem;
    }
    p {
        margin: 0.5rem 0;
        line-height: 1.5;
        max-width: 80%;
    }
    a {
        color: var(--primary-500);
    }
    a:hover {
        text-decoration: underline;
    }
`;
export default ErrorWrapper;
