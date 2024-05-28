import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ScreenFive from '../screens/ScreenFive';
import ScreenFour from '../screens/ScreenFour';
import ScreenOne from '../screens/ScreenOne';
import ScreenThree from '../screens/ScreenThree';
import ScreenTwo from '../screens/ScreenTwo';
import {RootStackParamList} from './types';

const BottomTab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ScreenOne" component={ScreenOne} />
    <Stack.Screen name="ScreenFour" component={ScreenFour} />
    <Stack.Screen name="ScreenFive" component={ScreenFive} />
  </Stack.Navigator>
);
export default () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootStack" component={StackNavigator} />
      </Stack.Navigator> */}
      <BottomTab.Navigator
        screenOptions={{
          tabBarIcon: () => null,
          tabBarLabelStyle: {fontSize: 14}
        }}>
        <BottomTab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="ScreenTwo"
          component={ScreenTwo}
          options={{
            tabBarLabel: 'Cart',
          }}
        />
        <BottomTab.Screen
          name="ScreenThree"
          component={ScreenThree}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
