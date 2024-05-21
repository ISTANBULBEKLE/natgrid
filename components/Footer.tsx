// Footer.tsx
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Define the type for your navigation prop
type NavigationProp = NativeStackNavigationProp<
  {
    Home: undefined;
    Articles: undefined;
    History: undefined;
  },
  'Articles' | 'History'
>;

function Footer(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Button
        title="Articles"
        onPress={() => navigation.navigate('Articles')}
      />
      <Button title="History" onPress={() => navigation.navigate('History')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#333',
    padding: 10,
  },
});

export default Footer;
