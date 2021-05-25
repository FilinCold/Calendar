import MyCalendar from "../components/MyCalendar/MyCalendar";
import Authentication from "../components/Authentication/Authentication";
import SignIn from "../components/Authentication/SignIn/SignIn";
import SignUp from "../components/Authentication/SignUp/SignUp";


const routes = [
    {
        path: '/authentication/',
        component: Authentication,
        withAuth: false,
        exact: true,
    },
    {
        path: '/calendar/',
        component: MyCalendar,
        withAuth: true,
        exact: true,
    },
    {
        path: '/authentication/signin',
        component: SignIn,
        withAuth: false,
        exact: true,
    },
    {
        path: '/authentication/signup',
        component: SignUp,
        withAuth: false,
        exact: true,
    },

];

export default routes;