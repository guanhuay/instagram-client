import SignIn from "../pages/authPages/SignIn";
import SignUp from "../pages/authPages/SignUp";
import ResetPassword from "../pages/authPages/ResetPassword";

import Routes from "../commons/constant/Routes";

const publicRoutes = [
    {
        path: Routes.SIGN_IN,
        component: SignIn,
        exact: true,
        backUrl: Routes.HOME
    },
    {
        path: Routes.SIGN_UP,
        component: SignUp,
        exact: true,
        backUrl: Routes.HOME
    },
    {
        path: Routes.RESET_PASSWORD,
        component: ResetPassword,
        exact: true,
        backUrl: Routes.HOME
    }
];

export default publicRoutes;
