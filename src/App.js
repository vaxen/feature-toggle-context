import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cat from './Cat'
import {FeatureProvider} from './FeatureToggleProvider'

const features = [
  {id: 1, name: 'cat', enabled: true},
  {id: 2, name: 'learn', enabled: true},
  {id: 3, name: 'displayButton', enabled: false}
]

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <FeatureProvider value={features}/>
            <Cat/>
          <FeatureProvider/>
        </header>
        
      </div>
  );
}

export default App;
