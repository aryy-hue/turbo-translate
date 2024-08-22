import React from 'react';
import './App.css'; // Import your custom styles
import Translation from './components/Translation';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Language Translator</h1>
      </header>
      <main className="main">
        <Translation />
      </main>
      <footer className="footer">
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
