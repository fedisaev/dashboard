import {useMemo} from "react";
import {Test} from "../types/dashboardTypes";

export const useSortedTests = <T extends keyof Test>(
    cards: Test[],
    sort: T | ''
): Test[] => {
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

export const useTests = (
    cards: Test[],
    sort: keyof Test | '',
    query: string
): Test[] => {
    const sortedTests = useSortedTests(cards, sort);

    return useMemo(() => {
        return sortedTests.filter(
            (test) => test.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, sortedTests]);
};