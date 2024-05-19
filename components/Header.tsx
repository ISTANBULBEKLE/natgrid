import React from 'react';
import {View, Button} from 'react-native';

function Header(): React.JSX.Element {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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

export default Header;
