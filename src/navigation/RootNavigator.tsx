import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="RootStack" component={StackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
