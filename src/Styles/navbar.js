import styled from "styled-components";

const Wrapper = styled.nav`
    background: #fff;
    padding: 1rem 0;
    .container {
        width: 90%;
        max-width: 1150px;
        margin: auto;
        display: flex;
        flex-direction: column;
    }
    .logo {
        color: var(--primary-500);
        font-weight: 600;
        font-size: clamp(1.5rem, 3vw, 3rem);
    }
    .nav-links {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        margin-top: 1rem;
        .nav-link {
            text-transform: capitalize;
            font-size: 17px;
            font-weight: 500;
            color: var(--grey-600);
            transition: var(--transition);
        }
        .nav-link:hover {
            color: var(--primary-500);
        }
        .active {
            color: var(--primary-500);
        }
    }
    @media (min-width: 770px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .nav-links {
            flex-direction: row;
            gap: 15px;
            margin-top: 0;
            .nav-link {
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
`;

export default Wrapper;
