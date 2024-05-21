import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const History = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Articles"
          onPress={() => navigation.navigate('Articles')}
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

export default History;
