import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/AuthContext";

const Dashboard = () => {
  const {signout} = useContext(Context)
	return (
		<View>
			<Text>Dashboard</Text>
			<Button title="Sign Out" onPress={() => signout()} />
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({});
