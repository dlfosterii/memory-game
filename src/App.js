import React from 'react';

import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card title="Project Awesome" likes={0}></Card>
      <Card title="Project Amazing"></Card>
      <Card title="The Real Project Awesome"></Card>
      <Card></Card>
      

    </div>
  );
}

export default App;
