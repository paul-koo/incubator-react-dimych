type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onClick: (number: 0 | 1 | 2 | 3 | 4 | 5) => void;
};

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star
                selected={props.value > 0}
                value={1}
                onClick={props.onClick}
            />
            <Star
                selected={props.value > 1}
                value={2}
                onClick={props.onClick}
            />
            <Star
                selected={props.value > 2}
                value={3}
                onClick={props.onClick}
            />
            <Star
                selected={props.value > 3}
                value={4}
                onClick={props.onClick}
            />
            <Star
                selected={props.value > 4}
                value={5}
                onClick={props.onClick}
            />
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    value: 0 | 1 | 2 | 3 | 4 | 5;
    onClick: (number: 0 | 1 | 2 | 3 | 4 | 5) => void;
};

function Star(props: StarPropsType) {
    return (
        <span
            onClick={() => props.onClick(props.value)}
            style={{ cursor: "pointer" }}
        >
            {props.selected ? <b>Star</b> : "Star"}
        </span>
    );
}
