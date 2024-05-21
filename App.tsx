// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../natgrid/screens/Home';
import Articles from '../natgrid/screens/Articles';
import History from '../natgrid/screens/History';

const Stack = createNativeStackNavigator();

const App: React.ComponentType<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
