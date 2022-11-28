import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details</Text>
      <Text>{JSON.stringify(route.params)}</Text>

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