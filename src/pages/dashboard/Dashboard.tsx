import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useCards} from "../hooks/useCards";
import {useFetching} from "../hooks/useFetching";
import axios from "axios";
import Header from "../components/header/Header";
import MyInput from "../components/UI/input/MyInput";
import CardList from "../components/cardList/CardList";
import chevron from '../images/Chevron.png';

export enum Type {
    CLASSIC = "CLASSIC",
    SERVER_SIDE = "SERVER_SIDE",
    MVT = "MVT"
}

export enum Status {
    DRAFT = "DRAFT",
    ONLINE = "ONLINE",
    PAUSED = "PAUSED",
    STOPPED = "STOPPED",
}

export interface Card {
    id: number
    name: string
    type: Type
    status: Status
    siteId: number
}

export interface Site {
    id: number
    url: string
}

const Dashboard: FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [sites, setSites] = useState<Site[]>([]);
    const [selectedSort, setSelectedSort] = useState<keyof Card | ''>('');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const sortedAndSearchedCards = useCards(cards, selectedSort, searchQuery);

    const [fetchCards, loading, error] = useFetching(async () => {
        const responseSites = await axios.get<Site[]>('http://localhost:3100/sites');
        setSites(responseSites.data);
        const responseTests = await axios.get<Card[]>('http://localhost:3100/tests');
        setCards(responseTests.data);
    })

    const sortCards = (field: keyof Card) => {
        setSelectedSort(field);
    };


    useEffect(() => {
        fetchCards()
    }, [])

    return (
        <div className='wrapper'>
            <div className='div'>
                <Header title={'Dashboard'}/>
                <MyInput value={searchQuery}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                         cardsLength={sortedAndSearchedCards.length}
                />
                {error &&
                    <div style={{marginTop: 50, color: 'red', fontSize: 25}}>
                        An error occurred
                    </div>}
                {loading
                    ? <div style={{marginTop: 50, fontSize: 25}}>
                        Loading.....
                    </div>
                    : <CardList cards={sortedAndSearchedCards}
                                sortCards={sortCards}
                                sites={sites}
                                li={[
                                    {value: 'name', content: 'NAME'},
                                    {value: 'type', content: 'TYPE', image: chevron},
                                    {value: 'status', content: 'STATUS'},
                                    {value: 'siteId', content: `SITE`},
                                ]}/>
                }
            </div>
        </div>
    );
};

export default Dashboard;