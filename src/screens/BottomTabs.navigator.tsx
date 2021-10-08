import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '~src/types';
import { HomeTabNavigator } from './HomeTab.navigator';
import { OtherTab } from './OtherTab.screen';

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

const Blah = () => null;

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
      <BottomTabs.Screen name="OtherTab" component={OtherTab} />
      <BottomTabs.Screen name="Blah" component={Blah} />
    </BottomTabs.Navigator>
  );
};
