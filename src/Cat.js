import React, {useContext} from 'react'
import {FeatureContext} from './FeatureToggleProvider'

export const Cat = () => {
  const {isEnable} = useContext(FeatureContext)

  return  (<div>
          <p>Is Cat 🐱 feature enabled?</p>
          <ul>
          <p>{isEnable("cat").toString()}</p>
          </ul>
    </div>);
  
};

export default Cat;