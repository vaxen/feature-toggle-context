import React, { useState } from "react";

//TODO: here you can set some static initial feature
const initialFeatures = [];

const FeatureContext = React.createContext({
  features: initialFeatures,
  isEnable: () => {},
});

export const FeatureProvider = FeatureContext.Provider;

const FeatureToggleProvider = ({ children }) => {
  //TODO: now the features are injected by a static value, but you can fetch the data with useEffect
  const initialFeatures = [
    { id: 1, name: "cat", enabled: true },
    { id: 2, name: "learn", enabled: true },
    { id: 3, name: "displayLogo", enabled: true },
  ];

  const [features, setFeatures] = useState(initialFeatures);

  const isEnable = (featName) => {
    if (
      initialFeatures.some((e) => e.name && (e.name === featName && e.enabled === true))
    ) {
      return true;
    } else return false;
  };

  return (
    <FeatureProvider value={{ features: features, isEnable: isEnable }}>
      {children}
    </FeatureProvider>
  );
};

export { FeatureToggleProvider, FeatureContext };
