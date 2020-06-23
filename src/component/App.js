import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";


const App = props => {  

  const [state, updateState] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => { 
    console.log("buttonName", buttonName)
    updateState({ ...state, ...calculate(state, buttonName) });
  };
  
  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;





  // const [state, dispatch] = useReducer(calculate, { total: null, next: null, operation: null }) ;
  // handleClick={(buttonName) => dispatch({ ...state, buttonName })}

  // const memoizedHandleClick = useCallback ( (buttonName) => {
    //   const newState = { ...state, ...calculate(state, buttonName) };    
    //   updateState(newState);
    // }, [state]); // Tells React to memoize regardless of arguments.

