import Home from "../pages/main"
import Details from '../pages/details'

export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/details/:id",
        exact: true,
        component: Details
    }
];
