export function createStore (reducer) {
    let state;
    let listeners = [];

    const getState = () => state;
    const dispatch = (action) => {
        const beforeState = state;
        state = reducer(state, action);
        console.log('action:', action, 'before:', beforeState, state);
        listeners.forEach(listener => listener());
    };
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return { getState, dispatch, subscribe };
}