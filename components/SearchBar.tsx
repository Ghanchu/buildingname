import React from "react";
import { useState, useRef } from "react";
import { Text, TextInput, View, Pressable, Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useEffect } from "react";
import { Icon } from "react-native-elements";
import { searchvalue } from "../src/searchvalue";
import { SchoolCard } from "./SchoolCard";

type searchbarprops ={
  prop1:Function
}

export function MySearchBar(props: searchbarprops) {
  const [icon, setIcon] = useState("search");
  const press = useRef<TextInput>(null);
  const focus = () => {
    if (icon == "search") {
      if (press.current != null) {
        press.current.focus();
        setIcon("clear");
      }
    } else {
      Keyboard.dismiss();
      setIcon("search");
    }
  };

  let [value, setValue] = useState("");
  

 

  return (
    <View style={styles.viewcontainer}>
      <Pressable onPress={focus} hitSlop={20} pressRetentionOffset={20}>
        <View style={styles.icon}>
          <Icon name={icon}></Icon>
        </View>
      </Pressable>

      <TextInput
        onPressIn={focus}
        ref={press}
        style={styles.textinput}
        placeholder="Search Acronynms or Buildings"
        placeholderTextColor={"black"}
        onChangeText={(text) => setValue(text)}
        defaultValue={value}
        textAlign="left"
        onSubmitEditing={(event) => {
          focus();
          props.prop1(value)
          
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 40,
  },

  viewcontainer: {
    padding: 30,
    display: "flex",
    flexDirection: "row",
    shadowColor: 'brown',
    shadowOffset: {width: 20, height: 20},
    shadowRadius: 8, 
    shadowOpacity: 0.3

  },
  icon: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
