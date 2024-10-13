import { useState } from 'react';

export function UncontroledRating() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <Star selected={value > 0} onclick={setValue} value={1} />
            <Star selected={value > 1} onclick={setValue} value={2} />
            <Star selected={value > 2} onclick={setValue} value={3} />
            <Star selected={value > 3} onclick={setValue} value={4} />
            <Star selected={value > 4} onclick={setValue} value={5} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    onclick: (number: number) => void;
    value: number;
};

function Star(props: StarPropsType) {
    return (
        <span
            onClick={() => props.onclick(props.value)}
            style={{ cursor: 'pointer' }}
        >
            {props.selected ? <b>Star</b> : 'Star'}
        </span>
    );
    // return props.selected ? (
    //   <span onClick={props.onclick}>
    //     <b>Star</b>
    //   </span>
    // ) : (
    //   <span onClick={props.onclick}>Star</span>
    // );
}
