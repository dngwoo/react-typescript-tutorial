import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: red;
`

function App() {
  return (
    <div className="App">
      <Button>버튼!!</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
