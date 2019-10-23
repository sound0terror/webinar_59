import React from 'react';
import './App.css';
import FinancialAccounting from "./containers/FinancialAccounting";
import Graph from "./components/Graph/Graph";

function App() {
  return (
    <div className="App container">
      <FinancialAccounting/>
      <Graph categories={[{name: 'sdsd', amount: '20%'}]}/>
    </div>
  );
}

export default App;