import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Articles"
          onPress={() => navigation.navigate('Articles')}
        />
        <Button
          title="Go to History"
          onPress={() => navigation.navigate('History')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default Home;
