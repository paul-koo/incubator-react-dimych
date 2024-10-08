import React from 'react';
import { useMemo, useState } from 'react';

export default {
    title: 'useMemo',
};

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    useMemo(() => {
        for (let i = 1; i < a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;
        }
    }, [a]);

    for (let i = 1; i < b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => {}}
                onBlur={(e) => {
                    setA(+e.currentTarget.value);
                }}
            />
            <input
                type="text"
                onBlur={(e) => {
                    setB(+e.currentTarget.value);
                }}
            />
            <hr />
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('hello');
    return (
        <div>
            {props.users.map((user, i) => (
                <div key={i}>{user}</div>
            ))}
        </div>
    );
};

const Users = React.memo(UsersSecret);
export const HelpsForReactMemo = () => {
    console.log('HelpsForReactMemo');

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Artem', 'Pasha']);
    const filterUser = useMemo(() => {
        return users.filter((e) => e.toLowerCase().includes('a'));
    }, [users]);

    const addUser = () => {
        setUsers([...users, 'Sveta']);
    };
    return (
        <>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <button onClick={addUser}>addUser</button>
            {counter}
            <Users users={filterUser}></Users>
        </>
    );
};
