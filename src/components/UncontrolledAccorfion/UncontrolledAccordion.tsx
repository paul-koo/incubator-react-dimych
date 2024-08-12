import { useReducer } from 'react';
import { reducer, TOOGGLE_CONSTANT } from './reducer';

type AccordionPropsType = {
    titleValue: string;
    // collapsed?: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsedState, dispatch] = useReducer(reducer, {
        collapsed: false,
    });
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                onclick={() => {
                    dispatch({ type: TOOGGLE_CONSTANT });
                }}
            />
            {collapsedState.collapsed && <AccordionBody />}
        </>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onclick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h1 onClick={() => props.onclick()}>{props.title}</h1>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    );
}
