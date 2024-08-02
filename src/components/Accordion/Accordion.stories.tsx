import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // callback createar

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
    title: "Accordion", // название как будет оно отоброжаться в самом story book
    component: Accordion, //сама компонента
};
type Story = StoryObj<typeof Accordion>; // метод создания controlled компонента

export const FirtStory: Story = {
    args: {
        titleValue: "Hello",
        collapsed: true,
    },
};

const onChangeCallback = action("Accordion mode change event fired");

export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue="Collapsed"
            onclick={() => {
                onChangeCallback();
            }}
            collapsed={true}
        />
    );
};

export const OpenedAccordion = () => {
    return <Accordion titleValue="Open" onclick={() => {}} collapsed={false} />;
};

export const FullAccordion = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion
            titleValue="Rating"
            onclick={() => {
                setCollapsed(!collapsed);
            }}
            collapsed={collapsed}
        />
    );
};
