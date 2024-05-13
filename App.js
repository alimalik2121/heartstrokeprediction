import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StrokePrediction from './strokePrediction';
import MealPlannerScreen from './mealPlanner'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './homeScreen';
import UpdateProfileScreen from './updateProfile';
import SignupScreen from './Signup';
import LoginScreen from './Login';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Sign Up"
        component={SignupScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          )
        }}
        />
        <Tab.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Entypo name="login" size={24} color="black" />
          )
        }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="home" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="Stroke Prediction"
          component={StrokePrediction}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="heartbeat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Meal Planner"
          component={MealPlannerScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="utensils" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Update Profile" 
          component={UpdateProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Entypo name="man" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
