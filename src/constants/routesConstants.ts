import {Item, LiItem} from "../types/testListTypes";

export const dashboardPage: string = '/dashboard';
export const resultsIdPage: string = '/results/:id';
export const finalizeIdPage: string = '/finalize/:id';

export const urlSites: string = 'http://localhost:3100/sites';
export const urlTests: string = 'http://localhost:3100/tests';

export const titleDashboard: string = 'Dashboard';
export const titleResults: string = 'Results';
export const titleFinalize: string = 'Finalize';

export const testListConfig: LiItem[] = [
    {value: 'name', content: 'NAME'},
    {value: 'type', content: 'TYPE',},
    {value: 'status', content: 'STATUS',},
    {value: 'siteId', content: 'SITE'},
];

export const initialItems: Item[] = [
    {ONLINE: 1},
    {PAUSED: 2},
    {STOPPED: 3},
    {DRAFT: 4}
];

