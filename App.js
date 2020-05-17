import React from 'react'
import Home from './src/screens/Home'
import Search from './src/screens/Search';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribed from './src/screens/Subscribed';
import { MaterialIcons } from '@expo/vector-icons'
import { Provider, useSelector } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabColor: 'white'
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabColor: 'red'
  }
}

const rootReducer = combineReducers({
  cardData: reducer,
  darkMode: themeReducer
})

const store = createStore(rootReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const MainHome = () => {
  const { colors } = useTheme()
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = 'home'
          } else if (route.name == 'Explore') {
            iconName = 'explore'
          } else if (route.name == 'Subscribe') {
            iconName = 'subscriptions'
          }
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabColor,
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Explore' component={Explore} />
      <Tabs.Screen name='Subscribe' component={Subscribed} />
    </Tabs.Navigator>
  )
}

export default App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

function Navigation() {
  const currentTheme = useSelector(state => state.darkMode)
  return (
    <NavigationContainer theme={currentTheme ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='rootScreen' component={MainHome} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoPlayer' component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
