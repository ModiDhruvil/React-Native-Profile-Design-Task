import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register/Register';
import ProfileUpdate from '../screens/ProfileUpdate/ProfileUpdate';
import { PROFILE_UPDATE, REGISTER } from '../constants/route_name';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={REGISTER} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={REGISTER} component={Register} />
        <Stack.Screen name={PROFILE_UPDATE} component={ProfileUpdate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
