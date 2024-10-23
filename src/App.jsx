import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  function searchCity() {}
  return (
    <>
      <div>
        <h1>dev lub previsao do tempo</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nomeda cidade"
        />
        <button onClick={searchCity}>Buscar</button>
      </div>
    </>
  );
}

export default App;
