type OnOffPropsType = {
  onclick: (bol: boolean) => void;
  btnState: boolean;
};
export function OnOff({ onclick, btnState }: OnOffPropsType) {
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
          onclick(true);
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
          onclick(false);
        }}
      >
        off
      </button>
      <div style={round}></div>
    </>
  );
}
