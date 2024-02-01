import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 3rem;

    .form {
        display: grid;
        grid-template-columns: 1fr auto;
        input {
            border-radius: 5px 0 0px 5px;
        }
        button {
            border-radius: 0px 5px 5px 0px;
        }
    }
`;
