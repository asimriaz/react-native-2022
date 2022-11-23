import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import user, { getUserDetails } from "../store/user";

const DashBoardScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.user);

  const [users, setUsers] = useState([])

  useEffect(() => {
    dispatch(getUserDetails())
    if(list.length !== 0){
      setUsers([...user, ...list]);
    }
  
  }, [])
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Yo</Text>
      <Text>{list.length}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
	link: {
		color: "blue",
		textDecorationLine: "underline",
		fontSize: 20,
	},
});

export default DashBoardScreen