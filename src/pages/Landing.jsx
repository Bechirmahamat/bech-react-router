import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../component/CocktailList";
import { Wrapper } from "../Styles/From";
import { useQuery } from "@tanstack/react-query";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const fetchDataUsingQueryCLient = (searchItem) => {
    return {
        queryKey: ["search", searchItem || "all"],
        queryFn: async () => {
            const response = await axios.get(`${url}${searchItem}`);
            return response.data.drinks;
        },
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const pageUrl = new URL(request.url);

        const searchTerm = pageUrl.searchParams.get("search") || "";
        await queryClient.ensureQueryData(
            fetchDataUsingQueryCLient(searchTerm)
        );
        // const response = await axios.get(`${url}${searchTerm} `);

        return { searchTerm };
    };

const Landing = () => {
    const { searchTerm } = useLoaderData();
    const { data } = useQuery(fetchDataUsingQueryCLient(searchTerm));
    // console.log(data);
    return (
        <>
            <Wrapper>
                <Form className="form">
                    <input
                        type="search"
                        name="search"
                        className="form-input"
                        defaultValue={searchTerm}
                    />
                    <button type="submit" className="btn">
                        Search
                    </button>
                </Form>
            </Wrapper>

            <CocktailList drinks={data} searchTerm={searchTerm} />
        </>
    );
};

export default Landing;
