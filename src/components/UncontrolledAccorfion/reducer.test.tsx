import { reducer, StateType, TOOGGLE_CONSTANT } from './reducer';

test('collpsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false,
    };

    //action
    const newState = reducer(state, { type: TOOGGLE_CONSTANT });

    expect(newState.collapsed).toBe(true);
});

test('reducer should throw error becauses avction type os incorrect', () => {
    //data
    const state: StateType = {
        collapsed: false,
    };

    expect(() => {
        reducer(state, { type: 'FAKE' });
    }).toThrowError();
});
