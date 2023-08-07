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
            label: "Movie List",
            href: "/movie-lists",
        },
        {
            label: "Show list",
            href: "/show-lists",
        },
        {
            label: "Discussions",
            href: "/discussions",
        }
    ], [])

    return routes;
}

export default useRoutes;