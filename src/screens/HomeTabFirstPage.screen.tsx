import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Greeting } from '~src/components/Greeting';
import {
  useHomeNavigation,
  useRootNavigation,
} from '~src/hooks/useTypedNavigation';
import { BallsContext } from '../App';

export const HomeTabFirstPage = () => {
  const { numberOfBalls } = useContext(BallsContext);
  const homeNavigation = useHomeNavigation();
  const rootNavigation = useRootNavigation();
  return (
    <View style={styles.container}>
      <Greeting />
      <View style={styles.bottomSpace}>
        <Button
          title={`There are ${numberOfBalls} balls`}
          onPress={() => homeNavigation.navigate('SecondPage')}
        />
      </View>
      <Button
        title="Open Modal"
        onPress={() => rootNavigation.navigate('ExampleModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSpace: {
    marginBottom: 10,
  },
});
