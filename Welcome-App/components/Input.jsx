import React, { useState } from "react";

const Input = (props) => {
    const [name, setName] = useState('');

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={this.handleClick}>Update name</button>
    </>
  );
};

export default Input;
