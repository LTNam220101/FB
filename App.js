import React, {StatusBar, StyleSheet} from 'react-native';
import {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from './styles/colors';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NotiPage from './components/NotiPage/NotiPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [openAppBar, setOpenAppBar] = useState(1);
  const [isSignedIn, setIsSignIn] = useState(true);

  if (isSignedIn === undefined) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar
        backgroundColor={isSignedIn ? COLOR.white : COLOR.blueBackgroundLogin}
        barStyle={isSignedIn ? 'dark-content' : 'light-content'}
      />
      {isSignedIn ? (
        <SafeAreaView style={styles.container}>
          {openAppBar && <AppBar />}
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  }
                  if (route.name === 'Profile') {
                    iconName = focused
                      ? 'person-circle'
                      : 'person-circle-outline';
                  } else if (route.name === 'Noti') {
                    iconName = focused
                      ? 'notifications'
                      : 'notifications-outline';
                  }
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={25} color={color} />;
                },
                tabBarActiveTintColor: COLOR.active,
                tabBarInactiveTintColor: COLOR.inactive,
                tabBarShowIcon: true,
                tabBarShowLabel: false,
              })}>
              <Tab.Screen name="Home" component={HomePage} />
              <Tab.Screen name="Profile" component={ProfilePage} />
              <Tab.Screen name="Noti" component={NotiPage} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              initialParams={{setIsSignIn: setIsSignIn}}
            />
            <Stack.Screen
              name="Signup"
              component={SignupPage}
              initialParams={{setIsSignIn: setIsSignIn}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
