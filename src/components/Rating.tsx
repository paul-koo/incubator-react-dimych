type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onclick: (number: 0 | 1 | 2 | 3 | 4 | 5) => void;
};

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star
                selected={props.value > 0}
                value={1}
                onclick={props.onclick}
            />
            <Star
                selected={props.value > 1}
                value={2}
                onclick={props.onclick}
            />
            <Star
                selected={props.value > 2}
                value={3}
                onclick={props.onclick}
            />
            <Star
                selected={props.value > 3}
                value={4}
                onclick={props.onclick}
            />
            <Star
                selected={props.value > 4}
                value={5}
                onclick={props.onclick}
            />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onclick: (number: 0 | 1 | 2 | 3 | 4 | 5) => void;
};

function Star(props: StarPropsType) {
    return (
        <span
            onClick={() => props.onclick(props.value)}
            style={{ cursor: "pointer" }}
        >
            {props.selected ? <b>Star</b> : "Star"}
        </span>
    );
}
