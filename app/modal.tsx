import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {Link} from 'expo-router'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { color } from 'react-native-elements/dist/helpers';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text>This is just a small project that allows UOFM students to find transfer classes. Thank you!</Text>
      <View style = {styles.linkcontainer}>
      <Text>Email aparvaz@umich.edu with any concerns</Text>
       </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  linkcontainer: {
    color: 'blue',
    padding: 20
    
  },
});
