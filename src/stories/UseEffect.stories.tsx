import { useEffect, useState } from 'react';

export default {
    title: 'UseEffect demo',
};

export const SimpleExample = () => {
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

export const SetTimeoutExample = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // const number = useMemo(generate, []); // useMemo для исключения бесполезного просчета функции
    const time = {
        hour: 0,
        minutes: 0,
        seconds: 0,
        dateHour: 0,
        dateMinutes: 0,
        dateSeconds: 0,
    };

    const [counter, setCounter] = useState(time); // в useState можем передать функцию для исключения его многокрантого пересчета

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => {
                let time = new Date();

                if (state.minutes > 58) {
                    return {
                        ...state,
                        hour: state.hour + 1,
                        minutes: 0,
                        seconds: 0,
                        dateHour: time.getHours(),
                        dateMinutes: time.getMinutes(),
                        dateSeconds: time.getSeconds(),
                    };
                } else if (state.seconds > 58) {
                    return {
                        ...state,
                        minutes: state.minutes + 1,
                        seconds: 0,
                        dateHour: time.getHours(),
                        dateMinutes: time.getMinutes(),
                        dateSeconds: time.getSeconds(),
                    };
                } else {
                    console.log(time.getMinutes());
                    return {
                        ...state,
                        seconds: state.seconds + 1,
                        dateHour: time.getHours(),
                        dateMinutes: time.getMinutes(),
                        dateSeconds: time.getSeconds(),
                    };
                }
            });
        }, 1000);
        //api.getUsers().then('');
        //setInterval;
        //indexDB;
        //document.getElementId;
        //document.title = "User ";
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setCounter({ ...counter, minutes: counter.minutes + 1 }); //в функцию set можно передать другую функицю для изменения state
                }}
            >
                +
            </button>
            <div>
                {counter.hour > 9 ? counter.hour : '0' + counter.hour}:
                {counter.minutes > 9 ? counter.minutes : '0' + counter.minutes}:
                {counter.seconds > 9 ? counter.seconds : '0' + counter.seconds}
            </div>
            <div>
                {counter.dateHour}:{counter.dateMinutes}:{counter.dateSeconds}
            </div>
        </>
    );
};
