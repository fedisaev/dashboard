import React, {FC} from 'react';
import styles from './TestItem.module.css';
import MyButton from "../UI/button/MyButton";
import {getBorderStyle, getButtonStyle, getButtonText, getStatusStyle, trimUrlPrefix} from "./helpers";
import {useNavigate} from 'react-router-dom';
import {TestItemProps} from "../../types/testItemTypes";

const TestItem: FC<TestItemProps> = ({test, site}) => {

    const trimmedUrl = site ? trimUrlPrefix(site.url) : '';
    const borderStyle = getBorderStyle(trimmedUrl);
    const statusStyle = getStatusStyle(test.status);
    const buttonText = getButtonText(test.status);
    const buttonStyle = getButtonStyle(buttonText);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/${buttonText.toLowerCase()}/${test.id}`);
    };

    return (
        <div style={borderStyle} className={styles.test}>
            <div className={styles.test__name}>
                <p>{test.name}</p>
            </div>
            <div className={styles.test__type}>
                <p>{test.type}</p>
            </div>
            <div style={{...statusStyle }} className={styles.test__status}>
                <p>{test.status}</p>
            </div>
            <div className={styles.test__site}>
                <p>{trimmedUrl}</p>
            </div>
            <div onClick={handleButtonClick}>
                <MyButton style={buttonStyle}>{buttonText}</MyButton>
            </div>
        </div>
    );
};

export default TestItem;