import React, {FC, useContext} from 'react';
import TestItem from '../testItem/TestItem';
import {Site} from "../../types/dashboardTypes";
import {TestsContext} from "../../context/testsContext";
import {TestListProps} from "../../types/testListTypes";
import ListUl from "../listUl/ListUl";

const TestList: FC<TestListProps> = ({sortedAndSearchedTests}) => {

    const {sites} = useContext(TestsContext)!;

    const findSiteById = (sites: Site[], siteId: number) => {
        return sites.find((site) => site.id === siteId);
    };

    return (
        <>
            {sortedAndSearchedTests.length > 0 && <ListUl/>}
            <div>
                {sortedAndSearchedTests.map((test) =>
                    <TestItem key={test.id}
                              test={test}
                              site={findSiteById(sites, test.siteId)}
                    />)
                }
            </div>
        </>
    );
};

export default TestList;
