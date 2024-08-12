import { useState } from 'react';
import { Select } from './Select';
import { v4 } from 'uuid';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
};

export const FullSelect = () => {
    const [selectState, setSelectState] = useState<string | undefined>(
        undefined
    );

    const call = action('hello');
    return (
        <Select
            value={selectState}
            onChangeSelect={(value: string) => {
                setSelectState(value);
                call();
            }}
            options={[
                { title: 'AAA', id: v4() },
                { title: 'BBB', id: v4() },
                { title: 'CCC', id: v4() },
                { title: 'DDD', id: v4() },
            ]}
        />
    );
};
