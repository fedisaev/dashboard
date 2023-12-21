import React, {FC} from 'react';
import styles from './Header.module.css';
import {HeaderProps} from "../../types/headerTypes";

const Header: FC<HeaderProps> = ({title}) => {
    return (
        <>
            <div className={styles.title}>{title}</div>
        </>
    );
};

export default Header;