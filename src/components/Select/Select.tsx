import { useState } from 'react';

type SelectPropsType = {
    options: Array<OptionType>;
    value: string | undefined;
    onChangeSelect: (option: string) => void;
};

export type OptionType = {
    title: string;
    id: string;
};

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <h1 onClick={() => setCollapsed(!collapsed)}>
                {props.value ? props.value : 'Выбор'}
            </h1>
            {collapsed
                ? props.options.map((opt) => {
                      return (
                          <li
                              key={opt.id}
                              onClick={() => props.onChangeSelect(opt.title)}
                          >
                              {opt.title}
                          </li>
                      );
                  })
                : ''}
            {/* {props.options.map((opt) => {
                return <li onClick={() => props.onChangeSelect(opt)}>{opt}</li>;
            })} */}
        </div>
    );
}
