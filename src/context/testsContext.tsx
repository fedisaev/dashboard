import React, {createContext, FC, useState} from 'react';
import {Site, Test} from "../types/dashboardTypes";
import {TestsContextProps, TestsContextProviderProps} from "../types/contextTypes";

export const TestsContext = createContext<TestsContextProps | undefined>(undefined);

export const TestsContextProvider: FC<TestsContextProviderProps> = ({children}) => {
    const [tests, setTests] = useState<Test[]>([]);
    const [sites, setSites] = useState<Site[]>([]);
    const [selectedSort, setSelectedSort] = useState<keyof Test | ''>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [test, setTest] = useState<Test | {}>({});
    const [site, setSite] = useState<Site | {}>({});

    const value: TestsContextProps = {
        tests,
        setTests,
        sites,
        setSites,
        selectedSort,
        setSelectedSort,
        searchQuery,
        setSearchQuery,
        test,
        setTest,
        site,
        setSite
    };

    return (
        <TestsContext.Provider value={value}>
            {children}
        </TestsContext.Provider>
    );
};
