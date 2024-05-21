// Main.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Main: React.ComponentType<any> = () => {
  return (
    <View style={styles.container}>
      <Text>Main Content</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
