import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => {
          console.log('Navigate to Home');
          // Add navigation logic here
        }}
      />
      <Button
        title="Articles"
        onPress={() => {
          console.log('Navigate to Articles');
          // Add navigation logic here
        }}
      />
      <Button
        title="Correspondences"
        onPress={() => {
          console.log('Navigate to Correspondences');
          // Add navigation logic here
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Header;
