import { useState } from "react";
import { OnOff } from "./OnOff";
import { log } from "console";

export default {
    title: "OnOff",
    component: OnOff,
};

export const On = () => {
    return <OnOff btnState={true} onClick={() => {}} />;
};

export const Off = () => {
    return <OnOff btnState={false} onClick={() => {}} />;
};

export const Prewiev = () => {
    const [state, setState] = useState(false);
    return (
        <OnOff
            btnState={state}
            onClick={(bol: boolean) => {
                setState(bol);
            }}
        />
    );
};
