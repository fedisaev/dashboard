import React, {FC, useContext, useEffect} from 'react';
import styles from '../Pages.module.css';
import axios from "axios";
import {useTests} from "../../hooks/useTests";
import {useFetching} from "../../hooks/useFetching";
import Header from "../../components/header/Header";
import MyInput from "../../components/UI/input/MyInput";
import TestList from "../../components/testList/TestList";
import NoTests from "../../components/noTests/NoTests";
import {TestsContext} from "../../context/testsContext";
import {Site, Test} from "../../types/dashboardTypes";
import {titleDashboard, urlSites, urlTests} from "../../constants/routesConstants";

const Dashboard: FC = () => {

    const {
        tests,
        setTests,
        setSites,
        selectedSort,
        searchQuery,
    } = useContext(TestsContext)!;

    const sortedAndSearchedTests = useTests(tests, selectedSort, searchQuery);

    const [fetchTests, loading, error] = useFetching(async () => {
        const responseSites = await axios.get<Site[]>(urlSites);
        setSites(responseSites.data);
        const responseTests = await axios.get<Test[]>(urlTests);
        setTests(responseTests.data);
    })

    useEffect(() => {
        fetchTests()
    }, [])

    return (
        <div className={'wrapper'}>
            <div className={'div'}>
                <Header title={titleDashboard}/>
                <MyInput value={searchQuery}
                         testsLength={sortedAndSearchedTests.length}
                />
                {error &&
                    <div className={styles.error}>
                        An error occurred
                    </div>}
                {loading
                    ? <div className={styles.loading}>
                        Loading.....
                    </div>
                    : sortedAndSearchedTests.length === 0
                        ? <NoTests/>
                        : <TestList sortedAndSearchedTests={sortedAndSearchedTests}/>
                }
            </div>
        </div>
    );
};

export default Dashboard;