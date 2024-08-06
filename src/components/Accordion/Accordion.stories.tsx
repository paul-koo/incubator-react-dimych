import type { StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; // callback createar

import { Accordion } from './Accordion';
import { useState } from 'react';

export default {
    title: 'Accordion', // название как будет оно отоброжаться в самом story book
    component: Accordion, //сама компонента
};
type Story = StoryObj<typeof Accordion>; // метод создания controlled компонента

export const FirtStory: Story = {
    args: {
        titleValue: 'Hello',
        collapsed: true,
    },
};

const onChangeCallback = action('Accordion mode change event fired');

export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue="Collapsed"
            onChange={() => {
                onChangeCallback();
            }}
            collapsed={true}
            items={[
                { title: 'Dim', value: 1 },
                { title: 'Anrey', value: 2 },
                { title: 'Valera', value: 3 },
            ]}
            onClick={() => {
                action('some');
            }}
        />
    );
};

export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue="Open"
            onChange={() => {}}
            collapsed={false}
            items={[
                { title: 'Dim', value: 1 },
                { title: 'Anrey', value: 2 },
                { title: 'Valera', value: 3 },
            ]}
            onClick={() => action('ss')}
        />
    );
};

export const FullAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    const act = action('some');
    return (
        <Accordion
            titleValue="Rating"
            onChange={() => {
                setCollapsed(!collapsed);
            }}
            collapsed={collapsed}
            items={[
                { title: 'Dim', value: 1 },
                { title: 'Anrey', value: 15 },
                { title: 'Valera', value: 3 },
            ]}
            onClick={act}
        />
    );
};
