import Dashboard from "../pages/dashboard/Dashboard";
import Results from "../pages/results/Results";
import Finalize from "../pages/finalize/Finalize";
import {RouteTypes} from "../types/routeTypes";
import {dashboardPage, finalizeIdPage, resultsIdPage} from "../constants/routesConstants";

export const routes: RouteTypes[] = [
    {path: dashboardPage, element: Dashboard},
    {path: resultsIdPage, element: Results},
    {path: finalizeIdPage, element: Finalize},
    {path: '*', element: Dashboard},
];