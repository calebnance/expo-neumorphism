import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// grab main navigation stack
import MainStackScreen from './MainStack';

// screens
import SelectColor from '../screens/SelectColor';

// create navigation stack
const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="SelectColor"
          component={SelectColor}
          options={{
            title: 'Select color'
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackScreen;
