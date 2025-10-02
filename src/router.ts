import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { HomePage } from "./pages/home/page";
import { RestaurantPage } from "./pages/restaurant/page";
import { NotFoundPage } from "./not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: HomePage
            },
            {
                path: "restaurant/:id",
                Component: RestaurantPage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ],
    }
])