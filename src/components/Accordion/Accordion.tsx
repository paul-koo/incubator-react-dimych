type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onclick: () => void;
};

export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue} onclick={props.onclick} />
            {!props.collapsed && <AccordionBody />}
        </>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onclick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h1 onClick={props.onclick}>{props.title}</h1>;
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
