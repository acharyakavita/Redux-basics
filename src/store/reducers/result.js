import * as actionTYpes from '../action';
const initialState = {
    results:[]
}

//reducer
const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTYpes.STORE_RESULT: 
                return {
                        ...state,
                    results:state.results.concat({value:action.result,id:new Date()})
                }
        case actionTYpes.DELETE_RESULT: 
                const newArray=[...state.results]
                newArray.splice(action.id,1);
                return {
                        ...state,
                    results:newArray
                }
        
           
        default: break;
    }

    return state;
};


export default resultReducer;