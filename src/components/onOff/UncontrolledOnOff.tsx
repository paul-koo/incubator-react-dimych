import { useState } from "react";

export function UncontrolledOnOff(props: { active: boolean }) {
  const [btnState, setBtnState] = useState(false);

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
          setBtnState(true);
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
          setBtnState(false);
        }}
      >
        off
      </button>
      <div style={round}></div>
    </>
  );
}
