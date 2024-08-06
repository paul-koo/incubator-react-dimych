type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void;
    items: Array<ItemType>; // string[]
    onClick: (value: string) => void;
};

type ItemType = {
    title: string;
    value: any;
};
export function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue} onclick={props.onChange} />
            {!props.collapsed && (
                <AccordionBody items={props.items} onClick={props.onClick} />
            )}
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

type AccordionBodyPropsType = {
    items: Array<ItemType>; // string[]
    onClick: (value: string) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => {
                            props.onClick(el.value);
                        }}
                    >
                        {el.title}
                    </li>
                );
            })}
        </ul>
    );
}
