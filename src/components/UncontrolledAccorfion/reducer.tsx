type ActionType = {
    type: string;
};

export type StateType = {
    collapsed: boolean;
};

export const TOOGGLE_CONSTANT = 'TOOGGLE-COLLAPSED';

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case TOOGGLE_CONSTANT:
            return { ...state, collapsed: !state.collapsed };
        default:
            throw new Error('Bad action type');
    }
};
