// Home.tsx
import React from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <View>
        <Header />
      <Text>Home Screen</Text>
      <Footer />
    </View>
  );
};

export default Home;
