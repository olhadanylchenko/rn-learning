import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  ExampleModal: undefined;
};

export type BottomTabsParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  OtherTab: undefined;
  Blah: undefined;
};

export type HomeStackParamList = {
  FirstPage: undefined;
  SecondPage: undefined;
};
