import { createStore, combineReducers } from 'redux';

let initialState = {
    user: {
        name: "John Doe",
        age: 35
    },
    tweets: [{
        text: 'Hellow',
        author: "John Doe"
    }, {
        text: 'Hi',
        author: "John Doe"
    }]
};

const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = {
                ...state,
                name: action.payload
            };
            break;
        }
        case "CHANGE_AGE": {
            state = {
                ...state,
                age: action.payload
            };
        }
    }
    return state;
}

const tweetsReducer = (state = initialState.tweets, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            state = state.map((tweet) => {
                return tweet = {...tweet, author: action.payload };
            });
            break;
        }
    }
    return state;
}

const reducers = combineReducers({
    user: userReducer, 
    tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log('Store changed ', store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Jane"});
store.dispatch({type: "CHANGE_AGE", payload: 20});
