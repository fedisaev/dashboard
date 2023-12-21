import React, {FC} from 'react';
import styles from './CardItem.module.css';
import MyButton from "../UI/button/MyButton";
import {getBorderStyle, getButtonStyle, getButtonText, getStatusStyle, trimUrlPrefix} from "./helpers";
import {useNavigate} from 'react-router-dom';
import {CardItemProps} from "../../types/cardItemTypes";

const CardItem: FC<CardItemProps> = ({card, site}) => {

    const trimmedUrl = site ? trimUrlPrefix(site.url) : '';
    const borderStyle = getBorderStyle(trimmedUrl);
    const statusStyle = getStatusStyle(card.status);
    const buttonText = getButtonText(card.status);
    const buttonStyle = getButtonStyle(buttonText);

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/${buttonText.toLowerCase()}/${card.id}`);
    };

    return (
        <div style={borderStyle} className={styles.card}>
            <div className={styles.card__name}>
                <p>{card.name}</p>
            </div>
            <div className={styles.card__type}>
                <p>{card.type}</p>
            </div>
            <div style={{...statusStyle }} className={styles.card__status}>
                <p>{card.status}</p>
            </div>
            <div className={styles.card__site}>
                <p>{trimmedUrl}</p>
            </div>
            <div onClick={handleButtonClick}>
                <MyButton style={buttonStyle}>{buttonText}</MyButton>
            </div>
        </div>
    );
};

export default CardItem;