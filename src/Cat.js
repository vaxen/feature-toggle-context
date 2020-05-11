import React, {useContext} from 'react'
import {FeatureContext} from './FeatureToggleProvider'

export const Cat = () => {
  const featuresContext = useContext(FeatureContext)

  const renderThings = featuresContext => {
    console.log(featuresContext)
    return featuresContext.features.map( f => {
        return <li key={f.id}>{f.name} enable: {f.enabled.toString()}</li>
    })
  }

  return  (<div>
          <p>Features are:</p>
          <ul>
            {renderThings(featuresContext)}
          </ul>
    </div>);
  
};

export default Cat;