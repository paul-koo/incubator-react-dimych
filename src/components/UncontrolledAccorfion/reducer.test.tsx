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
