import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = {
    mode: 'digital' | 'analog';
};

export const Clock = (props: Props) => {
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

    const secondsStyle = {
        transform: `rotate(${+getTwoDigitString(time.seconds) * 6}deg)`,
    };
    const minutesStyle = {
        transform: `rotate(${+getTwoDigitString(time.minutes) * 6}deg)`,
    };
    const hoursStyle = {
        transform: `rotate(${+getTwoDigitString(time.hours) * 30}deg)`,
    };

    return (
        <div>
            {props.mode === 'digital' ? (
                <>
                    {getTwoDigitString(time.hours)}:
                    {getTwoDigitString(time.minutes)}:
                    {getTwoDigitString(time.seconds)}
                </>
            ) : (
                <div className={`${styles.clock}`}>
                    <div className={styles['analog-clock']}>
                        <div
                            className={`${styles.dial} ${styles.seconds}`}
                            style={secondsStyle}
                        />
                        <div
                            className={`${styles.dial} ${styles.minutes}`}
                            style={minutesStyle}
                        />
                        <div
                            className={`${styles.dial} ${styles.hours}`}
                            style={hoursStyle}
                        />
                    </div>
                    <div className={'digital-clock'}>
                        {getTwoDigitString(time.hours)}:
                        {getTwoDigitString(time.minutes)}:
                        {getTwoDigitString(time.seconds)}
                    </div>
                </div>
            )}
        </div>
    );
};
