import React from 'react';
import useCounter from './useCounter';

const CounterComponent = () => {
  const step = 10;
  const { count, increment, decrement, reset } = useCounter(0, step);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment by {step}</button>
      <button onClick={decrement}>Decrement by {step}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;