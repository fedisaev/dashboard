import {Site, Test} from "./dashboardTypes";
import {Dispatch, ReactNode, SetStateAction} from "react";


export interface TestsContextProps {
    tests: Test[];
    setTests: Dispatch<SetStateAction<Test[]>>;
    sites: Site[];
    setSites: Dispatch<SetStateAction<Site[]>>;
    selectedSort: keyof Test | '';
    setSelectedSort: Dispatch<SetStateAction<keyof Test | ''>>;
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    test: Test | {}
    setTest: Dispatch<SetStateAction<Test>>;
    site: Site | {}
    setSite: Dispatch<SetStateAction<Site>>;
}

export interface TestsContextProviderProps {
    children: ReactNode;
}