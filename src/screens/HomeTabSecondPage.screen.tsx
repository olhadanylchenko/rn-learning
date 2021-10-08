import React, { useContext } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { BallsContext } from '~src/App';

export const HomeTabSecondPage: React.FC = () => {
  const { numberOfBalls, setNumberOfBalls } = useContext(BallsContext);

  const addBall = () => {
    setNumberOfBalls(numberOfBalls + 1);
  };
  const subtractBall = () => {
    setNumberOfBalls(numberOfBalls - 1);
  };

  return (
    <View style={styles.container}>
      <Text>{numberOfBalls} Balls</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'teal',
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <Pressable onPress={addBall}>
          <Text style={{ color: 'white', padding: 10 }}>Add a ball</Text>
        </Pressable>
        <Pressable onPress={subtractBall}>
          <Text style={{ color: 'white', padding: 10 }}>Subtract a ball</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
