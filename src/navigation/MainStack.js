import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { gStyle } from '../constants';

// screens
import Home from '../screens/Home';

// icons
import SvgDroplet from '../icons/Svg.Droplet';

// create navigation stack
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Neumorphism',
        headerRight: () => (
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={() => navigation.navigate('SelectColor')}
            style={gStyle.pR2}
          >
            <SvgDroplet />
          </TouchableOpacity>
        )
      })}
    />
  </MainStack.Navigator>
);

export default MainStackScreen;
