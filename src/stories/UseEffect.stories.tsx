import { useEffect, useState } from 'react';

export default {
    title: 'UseEffect demo',
};

export const Example1 = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const number = useMemo(generate, []); // useMemo для исключения бесполезного просчета функции
    const [counter, setCounter] = useState(1); // в useState можем передать функцию для исключения его многокрантого пересчета

    useEffect(() => {
        console.log('useEffect');
        document.title = counter + '';
        //api.getUsers().then('');
        //setInterval;
        //indexDB;
        //document.getElementId;
        //document.title = "User ";
    });

    return (
        <>
            <button
                onClick={() => {
                    setCounter(counter + 1); //в функцию set можно передать другую функицю для изменения state
                }}
            >
                +
            </button>
            {counter}
        </>
    );
};
