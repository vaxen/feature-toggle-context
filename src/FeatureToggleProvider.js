import React from 'react'


const features = [
  {id: 1, name: 'cat', enabled: true},
  {id: 2, name: 'learn', enabled: true},
  {id: 3, name: 'displayLogo', enabled: false}
]

const isEnable = featName =>{
  if (features.some(e => e.name === featName && e.enabled === true)) {
    return true
  }
  else return false
}

let featuresMap = new Map();
featuresMap.set()

const FeatureContext = React.createContext({features,isEnable});
export const FeatureProvider = FeatureContext.Provider;

 const FeatureToggleProvider = ({children}, ) =>{

   return (<FeatureProvider>
    {children}
  </FeatureProvider>)
} 

export  {FeatureToggleProvider,FeatureContext}