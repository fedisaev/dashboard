import React, {FC, useCallback, useContext, useState} from 'react';
import styles from './ListUl.module.css';
import {testListConfig} from "../../constants/routesConstants";
import {TestsContext} from "../../context/testsContext";
import {Test} from "../../types/dashboardTypes";
import chevron from '../../images/Chevron.png';
import AscDescButtons from "../ascDescButtons/AscDescButtons";

const ListUl: FC = () => {

    const {setSelectedSort} = useContext(TestsContext)!;

    const [showButtons, setShowButtons] = useState(false);

    const handleButtonClick = useCallback(() => {
        setShowButtons(prevShowButtons => !prevShowButtons);
    }, [showButtons]);

    const sortTests = (field: keyof Test) => {
        setSelectedSort(field);
    };

    return (
        <ul className={styles.wrapper}>
            <li onClick={() => sortTests(testListConfig[0].value)}>
                <span>{testListConfig[0].content}</span>
            </li>
            <li onClick={() => sortTests(testListConfig[1].value)}>
                <span>{testListConfig[1].content}</span>
                <img src={chevron} alt="chevron"/>
            </li>
            <li>
                <div onClick={handleButtonClick}>
                    <span>{testListConfig[2].content}</span>
                </div>
                {showButtons && <AscDescButtons handleButtonClick={handleButtonClick}/>}
            </li>
            <li onClick={() => sortTests(testListConfig[3].value)}>
                <span>{testListConfig[3].content}</span>
            </li>
        </ul>
    );
};

export default ListUl;