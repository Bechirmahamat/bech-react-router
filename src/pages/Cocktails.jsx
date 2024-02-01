import React from "react";
import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../Styles/cocktails";
import { useQuery } from "@tanstack/react-query";
const singleDrinkUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDataQueryClient = (id) => {
    return {
        queryKey: ["drink", id],
        queryFn: async () => {
            const response = await axios.get(singleDrinkUrl + id);
            return response.data;
        },
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const { id } = params;
        await queryClient.ensureQueryData(fetchDataQueryClient(id));
        return { id };
    };

const Cocktails = () => {
    const { id } = useLoaderData();
    const { data } = useQuery(fetchDataQueryClient(id));

    if (!data) return <Navigate to={"/"} />;

    const {
        strAlcoholic: alcohol,
        strCategory: category,
        strDrink: name,
        strDrinkThumb: img,
        strGlass: glass,
        strInstructions: instruction,
    } = data.drinks[0];

    const keys = Object.fromEntries(
        Object.entries(data.drinks[0]).filter(
            (item) => item.at(0).includes("strIngredient") && item.at(1) != null
        )
    );

    return (
        <Wrapper>
            <Link to={"/"} className="btn">
                Go back Home
            </Link>

            <div className="container">
                <div className="img-container">
                    <img src={img} alt={name} />
                </div>
                <div className="details">
                    <h3>
                        <span className="name"> name:</span>
                        <span className="special">{name}</span>
                    </h3>
                    <h3>
                        <span className="name"> category:</span>
                        <span className="special">{category}</span>
                    </h3>

                    <h3>
                        <span className="name"> info:</span>
                        <span className="special">{alcohol}</span>
                    </h3>
                    <h3>
                        <span className="name"> instructions:</span>
                        <span className="special">{instruction}</span>
                    </h3>
                    <h3>
                        <span className="name"> Ingradiant:</span>
                        <span className="special">
                            {Object.values(keys).toString()}
                        </span>
                    </h3>
                </div>
            </div>
        </Wrapper>
    );
};

export default Cocktails;
