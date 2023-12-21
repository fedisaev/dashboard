import {Card, Site} from "./dashboardTypes";

export interface CardItemProps {
    card: Card
    site: Site | undefined;
}