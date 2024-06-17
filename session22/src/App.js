import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';
import Child from './Child';

function App() {
  const [hello, setHello] = useState('Hello World')
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [dataFromChild, setDataFromChild] = useState('')
  const todoinput = useRef()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(async (json) => { if (Array.isArray(json)) { await setData(json) }} )
  }, [])

  const increase = () => {
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }

  const decrease = () => {
    if(count >= 1)
    setCount(count - 1)
  }

  const changeText = () => {
    if(hello == 'Hello')
    setHello('Hi')
  else {
    setHello('Hello')
  }
  }

  const resetText = () => {
    setHello('Hello World')
  }

  const addTodo = () => {
    let item = {title: todoinput.current.value, 
      completed: false, userId: 1, id: data.length + 1}
       setData([item, ...data]);
    }

    const handleDataFromChild = (data) => {
      console.log(data)
      setDataFromChild(data);
    };

    const dataFrom = (data) => { 
      console.log(data)
    }
  

  return (
    <div className="App">
      {hello} <br/>
    {count}
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
    <button onClick={changeText}>Say Toggle</button>
    <button onClick={reset}>Reset</button>
    <button onClick={resetText}>Reset Text</button>
    <button onClick={addTodo}>Add Todo</button>
    <input type="text" ref={todoinput}/>
    <button onClick={addTodo}>Add Task</button>
    <Child onData={handleDataFromChild} onPdata={dataFrom}/>
    <ul>
      {Array.isArray(data) && data.map(p => 
        <li key={p.id}>
          {p.title}
          </li>
      )}
      </ul>

    </div>
  );
}

export default App;
