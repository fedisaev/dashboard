import {useState} from 'react';

export const useFetching = (callback: () => Promise<void>): [() => Promise<void>, boolean, string] => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetching = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    return [fetching, loading, error];
};
