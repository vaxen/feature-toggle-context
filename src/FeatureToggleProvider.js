import React from 'react'

const features = [
  {id: 1, name: 'cat', enabled: true},
  {id: 2, name: 'learn', enabled: true},
  {id: 3, name: 'displayButton', enabled: false}
]

const FeatureContext = React.createContext({features});
export const FeatureProvider = FeatureContext.Provider;

 //const FeatureToggleProvider = ({children}) =>{

/*   return (<FeatureProvider>
    {children}
  </FeatureProvider>)
} */

export default FeatureContext