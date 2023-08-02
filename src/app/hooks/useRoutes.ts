import { useMemo } from "react";

const useRoutes = () => {
    const routes = useMemo(() => [
        {
            label: "Home",
            href: "/dashboard",
        },
        {
            label: "Explore",
            href: "/explore",
        },
        {
            label: "Movie Lists",
            href: "/movie-lists",
        },
        {
            label: "Show lists",
            href: "/show-lists",
        }
    ], [])

    return routes;
}

export default useRoutes;