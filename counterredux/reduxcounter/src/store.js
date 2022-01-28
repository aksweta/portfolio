import {createStore} from 'redux';  


const intialstate = {
    counter: 0,
}


function counterReducer (state,action)
{
    let newState = Object.assign({}, state || intialstate);
    if(action.type === "INCREASE_COUNT") {
        newState.counter += 1;
        return newState;
    }
    if(action.type === "DECREASE_COUNT") {
         newState.counter -= 1;
         return newState;
    }
    return newState.counter;
}


const store = createStore(counterReducer);

export default store;
