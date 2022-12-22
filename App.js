import React from "react";
import './App.css';

function App() {
  const [comp, setComp] = React.useState("Before Load");
  const onBtnClick = async function () {
  
        const resp = await import("./Home");
      setComp(resp.Home);
      };
  return ( <div className="App"><button onClick={onBtnClick}>Go to Home</button><div></div>{comp}</div>
);
}

export default App;
