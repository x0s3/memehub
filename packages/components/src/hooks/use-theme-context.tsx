import React, { createContext, Dispatch, useReducer, ComponentType, useContext } from 'react';

type Action = | { type: 'reset' } | { type: 'change' }

type StateType = {
    theme: number
}

const initialState: StateType = {
    theme: 0
};

const reducer = (state: StateType, action: Action) => ({
    'reset': ({ ...initialState }),
    'change': ({ theme: state.theme === 1 ? 0 : 1 })
})[action.type] || state;

const ThemeContext = createContext(initialState);

const DispatchContext = createContext((() => 0) as Dispatch<Action>);

export const Provider: ComponentType = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DispatchContext.Provider value={dispatch} >
            <ThemeContext.Provider value={state}>
                {children}
            </ThemeContext.Provider>
        </DispatchContext.Provider>
    );
};

export const useDispatch = () => {
    return useContext(DispatchContext);
};

export const useGlobalState = <K extends keyof StateType>(property: K) => {
    const state = useContext(ThemeContext);
    return state[property];
};
