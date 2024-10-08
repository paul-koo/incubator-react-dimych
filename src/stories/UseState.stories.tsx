import { useState } from 'react';

export default {
    title: 'UseState demo',
};

function generate() {
    console.log('generate');
    return 1;
}

export const Example1 = () => {
    console.log('Ex1');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const number = useMemo(generate, []); // useMemo для исключения бесполезного просчета функции
    const [counter, setCounter] = useState(generate); // в useState можем передать функцию для исключения его многокрантого пересчета

    const changer = (number: number) => {
        return number + 1;
    };
    return (
        <>
            <button
                onClick={() => {
                    setCounter(changer); //в функцию set можно передать другую функицю для изменения state
                }}
            >
                +
            </button>
            {counter}
        </>
    );
};
