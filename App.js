import React, {StatusBar, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {store} from './store';
import SplashScreen from './components/SplashScreen/SplashScreen';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import NotiPage from './components/NotiPage/NotiPage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import {COLOR} from './styles/colors';
import SettingPage from './components/SettingPage/SettingPage';
import MessengerHomePage from './components/MessengerPage/MessengerHomePage';
import SearchScreen from './components/SearchPage/SearchScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [openAppBar, setOpenAppBar] = useState(1);
  const [isSignedIn, setIsSignIn] = useState(false);
  const [state, setState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsSignIn(false);
    }, 2000);
  }, []);

  if (isSignedIn === undefined) {
    return <SplashScreen />;
  }

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={isSignedIn ? COLOR.white : COLOR.blueBackgroundLogin}
        barStyle={isSignedIn ? 'dark-content' : 'dark-content'}
      />
      {isSignedIn ? (
        <SafeAreaView style={styles.container}>
          {openAppBar && <AppBar setState={setState} />}
          {state === 0 ? (
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
                    }
                    if (route.name === 'Noti') {
                      iconName = focused
                        ? 'notifications'
                        : 'notifications-outline';
                    }
                    if (route.name === 'Setting') {
                      iconName = focused ? 'menu' : 'menu-outline';
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
                <Tab.Screen
                  name="Setting"
                  children={() => <SettingPage setIsSignIn={setIsSignIn} />}
                />
              </Tab.Navigator>
            </NavigationContainer>
          ) : state === 1 ? (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  name="Search"
                  children={() => <SearchScreen setState={setState} />}
                />
              </Stack.Navigator>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  name="Messenger"
                  children={({navigation}) => (
                    <MessengerHomePage
                      setState={setState}
                      navigation={navigation}
                    />
                  )}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
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
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
