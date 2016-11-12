import { createStore } from 'redux';

let initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC": {
            state = state + action.payload;
            break;
        }
        case "DEC": {
            state = state - action.payload;
            break;
        }
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    // console.log('Subscribing to the store');
    console.log('Store changed ', store.getState());
});

store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 20});
store.dispatch({type: "DEC", payload: 5});