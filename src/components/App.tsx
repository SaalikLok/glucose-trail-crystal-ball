import React from "react";

type Props = {
  someText: string;
};

const App = ({ someText }: Props) => {
  return (
    <div>
      <h1>{someText}</h1>
    </div>
  );
};

export default App;
