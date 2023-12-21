import {Site, Test} from "./dashboardTypes";


export interface TestItemProps {
    test: Test
    site: Site | undefined;
}