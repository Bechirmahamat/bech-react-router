import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
    HomeLayout,
    About,
    Cocktails,
    Landing,
    Error,
    SingleError,
    Newsletter,
} from "./index";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktails";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});
import { action as newsLetterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <SingleError />,
                loader: landingLoader(queryClient),
            },
            {
                path: "cocktail/:id",
                element: <Cocktails />,
                errorElement: <SingleError />,
                loader: singleCocktailLoader(queryClient),
            },
            {
                path: "newsletter",
                element: <Newsletter />,
                action: newsLetterAction,
            },
            {
                path: "error",
                element: <Error />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>;
            <ReactQueryDevtools initialIsOpen="true" />
        </QueryClientProvider>
    );
};
export default App;
