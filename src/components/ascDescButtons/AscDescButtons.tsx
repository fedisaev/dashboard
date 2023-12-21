import React, {FC, useCallback, useContext, useState} from 'react';
import styles from './AscDescButtons.module.css';
import {initialItems} from "../../constants/routesConstants";
import {TestsContext} from "../../context/testsContext";
import {AscDescProps} from "../../types/ascDescTypes";

const AscDescButtons: FC<AscDescProps> = ({handleButtonClick}) => {

    const {tests, setTests} = useContext(TestsContext)!;

    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = useCallback((order: 'asc' | 'desc') => {
        const sorted = [...tests].sort((a, b) => {
            const valueA = initialItems.find(item => Object.keys(item)[0] === a.status);
            const valueB = initialItems.find(item => Object.keys(item)[0] === b.status);
            return order === 'asc'
                ? valueA![Object.keys(valueA!)[0]] - valueB![Object.keys(valueB!)[0]]
                : valueB![Object.keys(valueB!)[0]] - valueA![Object.keys(valueA!)[0]];
        });
        setTests(sorted);
        setSortOrder(order);
        handleButtonClick();
    }, [sortOrder, tests]);

    return (
        <>
            <div>
                <button className={styles.buttons} onClick={() => handleSort('asc')}>ASC</button>
            </div>
            <div>
                <button className={styles.buttons} onClick={() => handleSort('desc')}>DESC</button>
            </div>
        </>
    );
};

export default AscDescButtons;