import {ReactNode} from "react";
import {Card} from "./dashboardTypes";

export interface LiItem {
    value: keyof Card;
    content: ReactNode;
    image?: string;
}

export interface CardListProps {
    sortedAndSearchedCards: Card[];
}

export interface Item {
    [key: string]: number;
}