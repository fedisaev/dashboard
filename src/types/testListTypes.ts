import {Test} from "./dashboardTypes";
import {ReactNode} from "react";

export interface LiItem {
    value: keyof Test;
    content: ReactNode;
    image?: string;
}

export interface TestListProps {
    sortedAndSearchedTests: Test[];
}

export interface Item {
    [key: string]: number;
}