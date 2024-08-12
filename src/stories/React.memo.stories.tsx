import React from 'react';
import { useState } from 'react';

export default {
    title: 'React.memo demo',
};

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>;
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
export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dim', 'Art', 'Pash']);
    return (
        <>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                +
            </button>
            <NewMessagesCounter count={counter} />
            <Users users={users}></Users>
        </>
    );
};
