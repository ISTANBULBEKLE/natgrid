// App.tsx
import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './components/Articles';
import History from './components/History';
import {enableScreens} from 'react-native-screens';

const Stack = createNativeStackNavigator();

const App: React.ComponentType<any> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  enableScreens();
  return (
    <NavigationContainer>
      <View style={[styles.container, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.header}>
          <Header />
        </View>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Articles" component={Articles} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f4511e',
    flex: 0.2,
  },
  footer: {
    flex: 0.3,
  },
});

export default App;
