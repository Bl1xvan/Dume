import { useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState(0);
  function widenBox(){
    setSize((s) => s + 1)
  }

  function shortenBox(){
    setSize((s) => s - 1)
  }

  const redbox = {
    color: "white",
    backgroundColor: "blue",
    width: size + "em"
  }

  return (
    <>
      <div style={redbox}>Red Box</div>
      <button onClick={widenBox}>Increase Box size</button>
      <button onClick={shortenBox}>Decrease Box size</button>
    </>
  );
}

export default App;
