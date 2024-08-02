import React, { useState } from "react";
import "./App.css";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion";
import { UncontroledRating } from "./components/UncontrolledRating";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/onOff/OnOff";
import { Rating } from "./components/Rating/Rating";

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
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontroledRating />
            <OnOff btnState={btnState} onClick={setBtnState} />
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
