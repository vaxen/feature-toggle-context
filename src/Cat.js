import React, {useContext} from 'react'
import {FeatureContext} from './FeatureToggleProvider'

export const Cat = () => {
  const featuresContext = useContext(FeatureContext)

  const renderThings = featuresContext => {
    console.log(featuresContext.isEnable("cat"))
    return <p>{featuresContext.isEnable("cat").toString()}</p>
  }

  return  (<div>
          <p>Is Cat 🐱 feature enabled?</p>
          <ul>
            {renderThings(featuresContext)}
          </ul>
    </div>);
  
};

export default Cat;