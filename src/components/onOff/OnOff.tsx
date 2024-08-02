type OnOffPropsType = {
    onClick: (bol: boolean) => void;
    btnState: boolean;
};
export function OnOff({ onClick, btnState }: OnOffPropsType) {
    const button = {
        width: "100px",
        height: "25px",
    };

    const round = {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        backgroundColor: btnState ? "green" : "red",
    };

    return (
        <>
            <button
                style={{
                    ...button,
                    backgroundColor: `${btnState ? "green" : "white"}`,
                }}
                onClick={() => {
                    onClick(true);
                }}
            >
                on
            </button>
            <button
                style={{
                    ...button,
                    backgroundColor: `${btnState ? "white" : "red"}`,
                }}
                onClick={() => {
                    onClick(false);
                }}
            >
                off
            </button>
            <div style={round}></div>
        </>
    );
}
