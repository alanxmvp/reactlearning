import React, { useState } from 'react';

function Change() {
  const [isBlue, setBlue] = useState(false);
  const changing = () => {
    setBlue(true);
  }

  // sample to using useState when reading data return from API
  // const [user, setUser] = useState({
  //  name: 'Alan',
  //  age: 28,
  //  hobbies: ['movies', 'music']
  // });

  return (
    <div>
      <h3 className={isBlue ? "newsample" : ""}>Change Text color</h3> {/* If and else  */}
      <button onClick={changing}>Change</button>
    </div>
  );
}

export default Change;