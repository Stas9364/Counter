import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import style from "./Counter/Counter.module.css";

function App() {
    let [count, setCount] = useState<number>(0);

    const addStyle = style.add;
    const resetStyle = style.reset;

  return (
    <div className='container'>
        <Counter
            setCount={setCount}
            count={count}
            addStyle={addStyle}
            resetStyle={resetStyle}
        />
    </div>
  );
}

export default App;
