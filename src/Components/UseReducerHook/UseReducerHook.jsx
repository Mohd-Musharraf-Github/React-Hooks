import { useReducer } from "react"

const IntialState = {
    count : 0,
    showCount : true
}

function reducer(state,action){
    console.log(state,action);

    switch (action.type) {
        case 'add':
            return {...state,
                count : state.count + 1
            };
        case 'Subtract':
            return {...state,
                count : state.count - 1
            };
        case 'reset':
            return{...state,
                count : 0
            };
        case 'showCount':
            return{...state,
                showCount: !state.showCount
            }
    
        default:
            return state;
    }
    
}


function UseReducerHook(){

     const[state,dispatch] = useReducer(reducer,IntialState)

    //  console.log(state);
     

    return(
        <div>
            <h1>Use Reducer Hook!!</h1>
            <button onClick={()=> dispatch({type : 'add'})}>Increase</button>
            <button onClick={()=> dispatch({type :'Subtract'})}>Decrease</button>
            <button onClick={()=> dispatch({type : 'reset'})}>Reset</button>
            <button onClick={()=> dispatch({type : 'showCount'})}>Show Count</button>

            <div>{state.showCount ? <h1>{state.count}</h1>: null }</div>
        </div>
    )
}

export default UseReducerHook