import React, { FC} from 'react';
import styles from './MyButton.module.css';
import {MyButtonProps} from "../../../types/myButtonTypes";

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.test__buttons}>
            {children}
        </button>
    );
};

export default MyButton;