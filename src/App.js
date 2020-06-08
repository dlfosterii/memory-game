import React from 'react';

import Card from './components/Card';

import './App.css';

function App() {
  const projects = [
    { name: 'Project Awesome', likes: 10},
    { name: 'Project Amazing', likes: 1},
    { name: 'The Real Project Awesome',likes: 5},
    { name: 'Final Project Awesome',likes: 10000},
  ]

  return (
    <div className="App">
      {projects.map((project, index) => {
        return <Card 
        name={project.name} 
        key={index}
        likes={project.likes}
        ></Card>
      })}
    </div>
  );
}

export default App;
