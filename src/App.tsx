import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './screens/Root.navigator';

export const BallsContext = React.createContext({
  setNumberOfBalls: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  numberOfBalls: 0,
});

export const App: React.FC = () => {
  const [numberOfBalls, setNumberOfBalls] = useState(0);
  return (
    <BallsContext.Provider value={{ setNumberOfBalls, numberOfBalls }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </BallsContext.Provider>
  );
};
