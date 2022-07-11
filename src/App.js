import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
// import List from './components/List';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <h2>Todo App</h2>
      </header>
      <div className='App-main'>
        <Todo />
      </div>
      <footer className="App-footer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Created with <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noreferrer'
          style={{ color: "#61dafb" }}
        >ReactJS</a></p>
      </footer>
    </div>
  );
}

export default App;
