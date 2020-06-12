import React, { useState } from 'react';

function Counting() {

  const [counter, setCount] = useState(0);
  const addCount = () => {
    setCount(counter + 1);
  };

  return (
    <div>
      <h3>This is counter component</h3>
      <button onClick={addCount}>Add</button>
      <p>Add button clicked count: {counter}</p>
    </div>
  );
}

export default Counting;