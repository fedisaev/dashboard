import {useMemo} from "react";
import {Card} from "../types/dashboardTypes";

export const useSortedCards = <T extends keyof Card>(
    cards: Card[],
    sort: T | ''
): Card[] => {
    return useMemo(() => {
        if (sort) {
            return [...cards].sort((a, b) => {
                const valueA = String(a[sort]).toLowerCase();
                const valueB = String(b[sort]).toLowerCase();
                return valueA.localeCompare(valueB);
            });
        }
        return cards;
    }, [sort, cards]);
};

export const useCards = (
    cards: Card[],
    sort: keyof Card | '',
    query: string
): Card[] => {
    const sortedCards = useSortedCards(cards, sort);

    return useMemo(() => {
        return sortedCards.filter(
            (card) => card.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedCards]);
};