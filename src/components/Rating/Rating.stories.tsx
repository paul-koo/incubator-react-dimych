import { title } from "process";

import { action } from "@storybook/addon-actions";
import { Rating } from "./Rating";

export default {
    title: "Rating",
    component: Rating,
};

export const Rating1 = () => {
    return <Rating onClick={action("1")} value={1} />;
};

export const Rating2 = () => {
    return <Rating onClick={action("2")} value={2} />;
};

export const Rating3 = () => {
    return <Rating onClick={action("3")} value={3} />;
};
export const Rating4 = () => {
    return <Rating onClick={action("4")} value={4} />;
};

export const Rating5 = () => {
    return <Rating onClick={action("5")} value={5} />;
};
