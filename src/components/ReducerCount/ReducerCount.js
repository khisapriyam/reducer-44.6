import React, { useReducer, useState } from 'react';

const initialState = {count: 0}//3cout er first value ta sunno
const reducer = (state, action) => {//4 akta fucntion declare korsi jeita 2ta parameter state and action 
    console.log(state, action);
    switch(action.type){//5 resucer declare korar jonno last jinis jeita seita holo switch
        case 'INCREMENT': //generally case ta capital letter a declare kore
            return {count: state.count + 1}
            break;
        case 'DECREMENT': //8
            return {count: state.count -1}
        default:
            return state;
    }
}

const ReducerCount = () => {
    //const [Count, SetCount] = useState(0)//1amra count, set count kore initial value ta useState a diye ditam
    const [state, dispatch] = useReducer(reducer, initialState);//2useState a amra akta single value pass kortam.aikhane amra duita value pass kortesi-reducer and initialState. 3ta value o pass kora jai
    return (
        <div>
            <h1>This is Reducer Count :{state.count}</h1>
            <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button> {/**6 */}
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button> {/**7 */}
        </div>
    );
};

export default ReducerCount;