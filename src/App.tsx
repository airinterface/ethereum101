// src/App.tsx
import React, { useState } from 'react';
import './App.scss';
import MyComponent from './components/MyComponent'

const App: React.FC = () => {
  const [state, setState] = useState<number>(0);

  const onClick = ()=>{
    /* 0 から 2 まで回転。/ Rotate 0 to 3 */
    setState( ( state + 1 ) % 3 )
  }

  return (
    <>
      <MyComponent active={state===0} title={"State 0"} />
      <MyComponent active={state===1} title={"State 1"} />
      <MyComponent active={state===2} title={"State 2"} />
      <button
        onClick={onClick}
      >
        click here
      </button>
    </>
  );
};

export default App;
