import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenThree from '../screens/ScreenThree';
import ScreenTwo from '../screens/ScreenTwo';
import { SCREEN_ONE, SCREEN_THREE, SCREEN_TWO } from './Routes';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_ONE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_ONE} component={ScreenOne} />
      <Stack.Screen name={SCREEN_TWO} component={ScreenTwo} />
      <Stack.Screen name={SCREEN_THREE} component={ScreenThree} />
    </Stack.Navigator>
  );
};
