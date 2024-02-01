import styled from "styled-components";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    .item {
        display: grid;
        grid-template-rows: auto 1fr;
        background: white;
        box-shadow: var(--shadow-2);
        border-radius: 5px;
        :hover {
            box-shadow: var(--shadow-4);
        }
        .img-container {
            height: 280px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px 5px 0 0;
            display: block;
        }
        .info {
            padding: 1rem 1.5rem;
            h4,
            h5,
            p {
                margin-bottom: 10px;
            }
            h4 {
                font-size: 20px;
                font-weight: 700;
            }
            h5 {
                font-size: 17px;
                font-weight: 500;
            }
            p {
                color: var(--grey-500);
            }
            a {
                color: var(--primary-500);
                font-weight: bold;
            }
        }
    }
`;

export default Wrapper;
