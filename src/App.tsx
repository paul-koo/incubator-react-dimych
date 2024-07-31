import React, { useState } from "react";
import "./App.css";
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion";
import { Rating } from "./components/Rating";
import { UncontroledRating } from "./components/UncontrolledRating";
import { Accordion } from "./components/Accordion";
import { OnOff } from "./components/onOff/OnOff";

function App(props: any) {
  const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);
  const [btnState, setBtnState] = useState(false);

  return (
    <div className="App">
      <Accordion
        titleValue="Controlled"
        onclick={() => setAccordionCollapsed(!accordionCollapsed)}
        collapsed={accordionCollapsed}
      />
      <UncontrolledAccordion titleValue={"Uncontrolled"} />
      <Rating value={ratingValue} onclick={setRatingValue} />
      <UncontroledRating />
      <OnOff btnState={btnState} onclick={setBtnState} />
      <UncontrolledOnOff active={true} />
    </div>
  );
}

// type PageTytlePropsType = {
//   title: string;
// };

// function PageTitle(props: PageTytlePropsType) {
//   console.log("PageTitle rendering")
//   return <h1>{props.title}</h1>

// }

export default App;
