import { useEffect, useState } from 'react';

export const Clock = () => {
    const initialState = {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    };

    const [time, setTime] = useState(initialState);

    const getTwoDigitString = (number: number): string => {
        return number < 10 ? `0${number}` : `${number}`;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime({
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            });
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }; //после того как компонента умирает useEffect запускает э ту функцию
    });
    return (
        <div>
            {getTwoDigitString(time.hours)}:{getTwoDigitString(time.minutes)}:
            {getTwoDigitString(time.seconds)}
        </div>
    );
};
