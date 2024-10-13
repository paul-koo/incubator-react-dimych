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

    function getTwoDigitString(number: number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

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
                        dateHour:
                            time.getHours() < 10
                                ? +`0${time.getHours()}`
                                : time.getHours(),
                        dateMinutes:
                            time.getMinutes() < 10
                                ? +`0${time.getMinutes()}`
                                : time.getMinutes(),
                        dateSeconds:
                            time.getSeconds() < 10
                                ? +`0${time.getSeconds()}`
                                : time.getSeconds(),
                    };
                } else if (state.seconds > 58) {
                    return {
                        ...state,
                        minutes: state.minutes + 1,
                        seconds: 0,
                        dateHour:
                            time.getHours() < 10
                                ? +`0${time.getHours()}`
                                : time.getHours(),
                        dateMinutes:
                            time.getMinutes() < 10
                                ? +`0${time.getMinutes()}`
                                : time.getMinutes(),
                        dateSeconds:
                            time.getSeconds() < 10
                                ? +`0${time.getSeconds()}`
                                : time.getSeconds(),
                    };
                } else {
                    console.log(time.getMinutes());
                    return {
                        ...state,
                        seconds: state.seconds + 1,
                        dateHour:
                            time.getHours() < 10
                                ? +`0${time.getHours()}`
                                : time.getHours(),
                        dateMinutes:
                            time.getMinutes() < 10
                                ? +`0${time.getMinutes()}`
                                : time.getMinutes(),
                        dateSeconds:
                            time.getSeconds() < 10
                                ? +`0${time.getSeconds()}`
                                : time.getSeconds(),
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
                {getTwoDigitString(counter.hour)}:
                {getTwoDigitString(counter.minutes)}:
                {getTwoDigitString(counter.seconds)}
            </div>
            <div>
                {counter.dateHour}:{counter.dateMinutes}:{counter.dateSeconds}
            </div>
        </>
    );
};
