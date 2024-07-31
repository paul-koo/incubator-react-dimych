import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // collapsed?: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <AccordionTitle
        title={props.titleValue}
        onclick={setCollapsed}
        state={collapsed}
      />
      {!collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onclick: (set: boolean) => void;
  state: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h1 onClick={() => props.onclick(!props.state)}>{props.title}</h1>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}
