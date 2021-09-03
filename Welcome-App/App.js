import React, { useState } from "react";

import Title from "./components/Title";
import Greeting from "./components/Greeting";
import Input from "./components/Input";

import "./styles.css";

const App = (props) => {
  const [displayName, setDisplayName] = useState();

  return (
    <>
      <Title title="Welcom to the app!" />
      <Greeting name={displayName} />
      <p>Enter your name below so we can get acquainted.</p>
      <Input handleClick={(name) => setDisplayName(name)} />
    </>
  );
};

export default App;
