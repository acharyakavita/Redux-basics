import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from './../../store/action';

import { connect } from 'react-redux';
class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounter} />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult=>
                       <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>)
                    }   
                </ul>   
            </div>
        );
    }
}

const mapStateToProps = state => {  
    return {
        ctr: state.ctr.counter,
        storedResults:state.res.results
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter:()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        addCounter:()=>dispatch({type:actionTypes.ADD,value:5}),
        subtractCounter:()=>dispatch({type:actionTypes.SUBTRACT,value:5}),
        onStoreResult:(result)=>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult:(id)=>dispatch({type:actionTypes.DELETE_RESULT,value:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);