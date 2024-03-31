/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
	  let iconName;
  
	  if (route && route.name === 'Home') {
		iconName = focused ? 'home' : 'home-outline';
	  } else if (route && route.name === 'Projects') {
		iconName = focused ? 'list' : 'list-outline';
	  }
  
	  // Return the Ionicons component with the correct icon name and styles
	  return <Icon name={iconName} size={size} color={color} />;
	},
  });
  

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Projects" component={Projects} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
