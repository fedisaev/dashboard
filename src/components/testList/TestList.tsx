import React, {FC, useCallback, useContext, useState} from 'react';
import CardItem from '../cardItem/CardItem';
import styles from './CardList.module.css';
import {CardListProps} from "../../types/cardListTypes";
import {Card, Site} from "../../types/dashboardTypes";
import {TestsContext} from "../../context/testsContext";
import {cardListConfig, initialItems} from "../../constants/routesConstants";

const CardList: FC<CardListProps> = ({sortedAndSearchedCards}) => {

    const {sites, setSelectedSort, cards, setCards} = useContext(TestsContext)!;

    const [showButtons, setShowButtons] = useState(false);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');


    const handleSort = useCallback((order: 'asc' | 'desc') => {
        const sorted = [...cards].sort((a, b) => {
            const valueA = initialItems.find(item => Object.keys(item)[0] === a.status);
            const valueB = initialItems.find(item => Object.keys(item)[0] === b.status);
            return order === 'asc'
                ? valueA![Object.keys(valueA!)[0]] - valueB![Object.keys(valueB!)[0]]
                : valueB![Object.keys(valueB!)[0]] - valueA![Object.keys(valueA!)[0]];
        });
        setCards(sorted);
        setSortOrder(order);
    }, [cards]);

    const handleButtonClick = useCallback(() => {
        setShowButtons(prevShowButtons => !prevShowButtons);
    }, []);


    const sortCards = (field: keyof Card) => {
        setSelectedSort(field);
    };

    const findSiteById = (sites: Site[], siteId: number) => {
        return sites.find((site) => site.id === siteId);
    };

    return (
        <>
            {sortedAndSearchedCards.length > 0 && (
                <ul className={styles.wrapper}>
                    <li onClick={() => sortCards(cardListConfig[0].value)}><span>{cardListConfig[0].content}</span></li>
                    <li onClick={() => sortCards(cardListConfig[1].value)}><span>{cardListConfig[1].content}</span></li>
                    <li>
                        <div onClick={handleButtonClick}><span>{cardListConfig[2].content}</span></div>
                        {showButtons && (
                            <>
                                <div>
                                    <button className={styles.buttons} onClick={() => handleSort('asc')}>ASC</button>
                                </div>
                                <div>
                                    <button className={styles.buttons} onClick={() => handleSort('desc')}>DESC</button>
                                </div>
                            </>
                        )}
                    </li>
                    <li onClick={() => sortCards(cardListConfig[3].value)}><span>{cardListConfig[3].content}</span></li>
                </ul>
            )}
            <div>
                {sortedAndSearchedCards.map((card) =>
                    <CardItem key={card.id}
                              card={card}
                              site={findSiteById(sites, card.siteId)}
                    />)
                }
            </div>
        </>
    );
};

export default CardList;
