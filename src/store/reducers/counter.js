import * as actionTYpes from './../action';
const initialState = {
    counter: 0,
}

//reducer
const CounterReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTYpes.INCREMENT: return {
            counter: state.counter + 1
            }
 
        case actionTYpes.ADD:
            return {
                counter: state.counter + action.value
            }
 
        case actionTYpes.SUBTRACT:
            return {
                counter: state.counter - action.value
            }
        case actionTYpes.DECREMENT: 
                return {
                    counter: state.counter - 1
                }
           
        default: break;
    }

    return state;
};


export default CounterReducer;