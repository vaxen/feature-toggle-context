import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './Cat'
import {FeatureToggleProvider} from './FeatureToggleProvider'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <FeatureToggleProvider/>
            <Cat/>
          <FeatureToggleProvider/>
        </header>
        
      </div>
  );
}

export default App;
