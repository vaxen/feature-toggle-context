import React,{useContext} from 'react';
import './App.css';
import Cat from './Cat'
import {FeatureContext} from './FeatureToggleProvider'
import LogoComponent from './LogoComponent';

function App() {
  const {isEnable} = useContext(FeatureContext)
  return (
      <div className="App">
          <header className="App-header">
            {isEnable("displayLogo") && (<LogoComponent />)}
            <Cat/>
          </header>
      </div>
  );
}

export default App;
