import React, { useState } from 'react';
import './App.css';
import { UncontrolledAccordion } from './components/UncontrolledAccorfion/UncontrolledAccordion';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/onOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { Select } from './components/Select/Select';
import { v4 } from 'uuid';
import { UncontroledRating } from './components/Rating/UncontrolledRating';
import { UncontrolledOnOff } from './components/onOff/UncontrolledOnOff';

function App(props: any) {
    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    const [btnState, setBtnState] = useState(false);
    const [selectState, setSelectState] = useState<string | undefined>(
        undefined
    );

    return (
        <div className="App">
            <Accordion
                titleValue="Controlled"
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                collapsed={accordionCollapsed}
                items={[
                    { title: 'Dim', value: 1 },
                    { title: 'Anrey', value: 2 },
                    { title: 'Valera', value: 3 },
                ]}
                onClick={() => {}}
            />
            <UncontrolledAccordion titleValue={'Uncontrolled'} />
            <Rating value={ratingValue} onClick={setRatingValue} />
            <UncontroledRating />
            <OnOff btnState={btnState} onClick={setBtnState} />
            <UncontrolledOnOff active={true} />
            <Select
                value={selectState}
                onChangeSelect={(value: string) => setSelectState(value)}
                options={[
                    { title: 'AAA', id: v4() },
                    { title: 'BBB', id: v4() },
                    { title: 'CCC', id: v4() },
                    { title: 'DDD', id: v4() },
                ]}
            />
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
