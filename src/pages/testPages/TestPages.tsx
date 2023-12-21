import React, {FC, useContext, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {TestsContext} from "../../context/testsContext";
import {useFetching} from "../../hooks/useFetching";
import axios from "axios";
import {Site, Test} from "../../types/dashboardTypes";
import {urlSites, urlTests} from "../../constants/routesConstants";
import styles from "../Pages.module.css";
import Header from "../../components/header/Header";
import TestId from "../../components/testId/TestId";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import {TestPagesProps} from "../../types/testPagesTypes";

const TestPages: FC<TestPagesProps> = ({title}) => {

    const params = useParams<{ id: string }>();
    const {setTest, setSite} = useContext(TestsContext)!;

    const [fetchTestById, loading, error] = useFetching(async () => {
        const responseTest = await axios.get<Test>(`${urlTests}/${params.id}`);
        setTest(responseTest.data);
        const responseSite = await axios.get<Site>(`${urlSites}/${responseTest.data.siteId}`);
        setSite(responseSite.data);
    })

    useEffect(() => {
        fetchTestById().then(r => console.log(r))
    }, [])

    return (
        <div className='wrapper'>
            <div className={styles.div}>
                <Header title={title}/>
                {error &&
                    <div className={styles.error}>
                        An error occurred
                    </div>}
                {loading
                    ? <div className={styles.loading}>
                        Loading.....
                    </div>
                    : <TestId/>
                }
                <div>
                    <ArrowBack/>
                </div>
            </div>
        </div>
    );
};

export default TestPages;