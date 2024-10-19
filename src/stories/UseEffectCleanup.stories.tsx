import { useEffect, useState } from 'react';

export default {
    title: 'UseEffect Cleanup demo',
};

export const Example = () => {
    const [counter, setCounter] = useState('');

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);

            setCounter((state) => {
                return state + e.key;
            });
        };
        window.addEventListener('keypress', handler);
        return () => window.removeEventListener('keypress', handler);
    }, []);

    return <>State: {counter}</>;
};
