import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

// Type for root navigation stacks
export type RootStackParamList = {
  RootStack: undefined,
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
};

export type ScreenStackComponent<
  T extends Record<string, object | undefined>,
  RouteName extends keyof T,
> = React.FC<{
  navigation: StackNavigationProp<T, RouteName>;
  route: RouteProp<T, RouteName>;
}>;