import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../../components/Themed';
import {MySearchBar} from '../../components/SearchBar';
import {SchoolCard} from '../../components/SchoolCard';



export default function TabOneScreen() {
  

  const [activeModal, setActiveModal] = useState(false)

  

  const handlePressParent = () => {
    if(activeModal == true) {
      setActiveModal(false)
    }
    else {
      setActiveModal(true)
    }
  }

  const info = {
    prop1: "USB (Undergraduate Science Building)",
    prop2: "623 Oxford Road Ann Arbor Michigan",
    prop3: handlePressParent
   
  }

  return (
    <View style={[styles.container, activeModal && styles.containerwithmodal ]}>
      <Text style={styles.title}></Text>
     
        <MySearchBar/>
        <SchoolCard {... info}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFCB05',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  containerwithmodal : {
    backgroundColor: '#FFEB9E',
    
  }
 
});
