import React,{useContext} from 'react';
import './App.css';
import Cat from './Cat'
import {FeatureToggleProvider,FeatureContext} from './FeatureToggleProvider'
import LogoComponent from './LogoComponent';



function App() {
  const featuresContext = useContext(FeatureContext)
  return (
      <div className="App">
        <FeatureToggleProvider/>
          <header className="App-header">
            {featuresContext.isEnable("displayLogo") && (<LogoComponent />)}
            <Cat/>
          </header>
        <FeatureToggleProvider/>
      </div>
  );
}

export default App;
