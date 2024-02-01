import styled from "styled-components";

const Wrapper = styled.section`
    .btn {
        width: fit-content;
        margin: 10px auto;
        justify-content: center;
        align-items: center;
        display: block;
    }
    .container {
        margin-top: 1.2rem;
        width: 100%;

        display: flex;
        gap: 20px;
        height: 80vh;
        @media (max-width: 800px) {
            flex-direction: column;
            width: 100%;
        }
    }
    line-height: 1.2;
    .img-container {
        width: 100%;
        min-width: 300px;
        max-height: 500px;
        max-width: 400px;

        img {
            width: 100%;
            height: auto
            display: block;
            border-radius: 15px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
    }
    .details {
        display: flex;
        max-width: 500px;
        flex-direction: column;
        gap: 15px;
        h3 {
            font-size: 17px;

            line-height: 2;
        }
        .name {
            padding: 4px 8px;
            background: var(--primary-200);
            margin-right: 10px;
            border-radius: 4px;
            text-align: center;
        }
    }
`;

export default Wrapper;
