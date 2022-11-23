import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen Yo</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
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

export default HomeScreen