import React, {FC, useContext} from 'react';
import styles from './MyInput.module.css';
import vector from '../../../images/Vector.png';
import {MyInputProps} from "../../../types/myInputTypes";
import {TestsContext} from "../../../context/testsContext";

const MyInput: FC<MyInputProps> = ({testsLength, value}) => {

    const {setSearchQuery} = useContext(TestsContext)!;

    return (
        <div className={styles.wrapper}>
            <img src={vector} alt="vector"/>
            <input className={styles.input}
                   value={value}
                   onChange={e => setSearchQuery(e.target.value)}
                   placeholder={'What test are you looking for?'}
            />
            <p>{testsLength} tests</p>
        </div>
    );
};

export default MyInput;

