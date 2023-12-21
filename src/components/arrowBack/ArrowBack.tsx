import React, { FC } from 'react';
import styles from './ArrowBack.module.css';
import chevron from '../../images/Chevron.png';
import { useNavigate } from 'react-router-dom';
import {dashboardPage} from "../../constants/routesConstants";

const ArrowBack: FC = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.arrow} onClick={() => navigate(dashboardPage)}>
            <img src={chevron} alt={'chevron'} /> Back
        </div>
    );
};

export default ArrowBack;
