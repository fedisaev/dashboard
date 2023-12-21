import React, {FC, useContext} from 'react';
import styles from './TestId.module.css';
import {Site, Test} from "../../types/dashboardTypes";
import {trimUrlPrefix} from "../testItem/helpers";
import {TestsContext} from "../../context/testsContext";

const TestId: FC = () => {

    const {test, site} = useContext(TestsContext)!;

    const siteUrl = trimUrlPrefix((site as Site).url);

    return (
        <>
            <div className={styles.divItem}>Test name: {(test as Test).name}</div>
            <div className={styles.divItem}>Test type: {(test as Test).type}</div>
            <div className={styles.divItem}>Test status: {(test as Test).status}</div>
            <div className={styles.divItem}>Test site: {siteUrl}</div>
        </>
    );
};

export default TestId;