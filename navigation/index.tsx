import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bookmark from '../screens/Bookmark';
import Setting from '../screens/Setting';
import Search from '../screens/Search';
import TermScreen from '../screens/Term';
import { BottomTabParamList, RootStackParamList } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Root" component={BottomTabNavigator} />
        <RootStack.Screen
          name="Term"
          component={TermScreen}
          options={{ headerShown: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
