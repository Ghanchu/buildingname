import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Text, View } from '../../components/Themed';
import {MySearchBar} from '../../components/SearchBar';
import {SchoolCard} from '../../components/SchoolCard';
import { searchvalue } from '../../src/searchvalue';



export default function TabOneScreen() {
  

  const [activeModal, setActiveModal] = useState(false)
  const [term, setTerm] = useState('null')
  
  

  const handlePressParent = () => {
    if(activeModal == true) {
      setActiveModal(false)
    }
    else {
      setActiveModal(true)
    }
  }


  

  

  
  
  

  const searchbar = {
    prop1: setTerm
  }

  const schoolcardstuff = {
    prop1: handlePressParent,
    prop2: term
  }

  return (
    <View style={[styles.container, activeModal && styles.containerwithmodal ]}>
      <Text style={styles.title}></Text>
     
        <MySearchBar {...searchbar}/>
        {term != 'null' && <SchoolCard {...schoolcardstuff}/>}
      <Text>Directions: Just enter the code for your class on the schedule and it will tell you where to go</Text>
        
        
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
