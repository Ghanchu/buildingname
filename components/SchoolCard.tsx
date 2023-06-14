import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'


type SchoolDisplayProps = {
  prop1: string;
  prop2: string;
  prop3: Function;
};

export function SchoolCard(props: SchoolDisplayProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const viewAnimation = useRef<Animatable.View & View>(null)

  useEffect(() => {
    if (modalVisible) {
        if(viewAnimation.current) {
            if(viewAnimation.current.fadeInUp) {
                viewAnimation.current.fadeInUp(300);
            }
        }
    
      
    }

    else {
        if(viewAnimation.current) {
            if(viewAnimation.current.fadeOutDown) {
                viewAnimation.current.fadeOutDown(200);
            }
        }
    }
  }, [modalVisible]);


  const handlePress = () => {
    setModalVisible(!modalVisible);
    props.prop3();
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <View style={styles.container}>
          <Text>{props.prop1}</Text>
          <Text>{props.prop2}</Text>
        </View>
      </Pressable>

      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <View style={styles.modalContainer}>
          <Animatable.View ref = {viewAnimation}>
            <View style={styles.modalContent}>
              <Text style = {styles.header}>Description</Text>
              <View style = {styles.line}></View>
              <Text style = {styles.description}> call the api that gets a description for you</Text>
              <Pressable onPress={handlePress}>
                <Icon
                    name = 'done'></Icon>
              </Pressable>
            </View>
            </Animatable.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    borderRadius: 10,
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.8,
    elevation: 4,
    marginVertical: 10,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ECEAE6',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.7,
    shadowColor: 'blue',
    shadowOffset: {width: 20, height: 9},
    shadowRadius: 10,
    shadowOpacity: 0.4
  },

  header: {
    fontSize: 40,
    padding: 10
  },
  line : {
   
    width: Dimensions.get('screen').width * 0.7,
    height: 2,
    backgroundColor: 'grey'
  
  },
  description: {
    paddingTop: 13
  }
  
  
});