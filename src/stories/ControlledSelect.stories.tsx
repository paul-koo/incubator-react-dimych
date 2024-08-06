import { ChangeEvent, useState } from 'react';

export default {
    title: 'ControlledSelect',
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState('1');
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return (
        <select name="" id="" value={parentValue} onChange={onChangeHandler}>
            <option value="1">none</option>
            <option value="2">Minsk</option>
            <option value="3">Brest</option>
            <option value="3">Gomel</option>
        </select>
    );
};
