import React, {FC, MouseEventHandler, useContext} from 'react';
import styles from './NoTests.module.css';
import MyButton from "../UI/button/MyButton";
import {TestsContext} from "../../context/testsContext";

const NoTests: FC = () => {

    const {setSearchQuery} = useContext(TestsContext)!;
    const handleResetClick: MouseEventHandler<HTMLButtonElement> = () => {
        setSearchQuery('');
    };

    return (
        <div className={styles.wrapper}>
            <p>Your search did not match any results.</p>
            <MyButton onClick={handleResetClick}>
                Reset
            </MyButton>
        </div>
    );
};

export default NoTests;