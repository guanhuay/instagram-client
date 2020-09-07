import AdminPage from "../pages/AdminPage";

import Routes from "../commons/constant/Routes";

const adminRoutes = [
    {
        path: "/admin",
        component: AdminPage,
        exact: true,
        role: "admin",
        backUrl: Routes.SIGN_IN
    }
]

export default adminRoutes;
