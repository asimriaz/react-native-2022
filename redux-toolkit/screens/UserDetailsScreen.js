import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Stack, TextInput, IconButton, BackdropSubheader } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

const HomeScreen = ({ route, navigation }) => {
    const { _id, name, dob, email, image, nat } = route.params;
    return (
        // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        //     <Text>Details</Text>
        <ScrollView>
            <Stack spacing={2} style={{ margin: 16 }}>
                <Text>{JSON.stringify(route.params)}</Text>
                {/* <TextInput label="Label" leading={(props) => <Icon name="account" {...props} />} />
            <TextInput
                label="Label"
                variant="outlined"
                trailing={(props) => <IconButton icon={(props) => <Icon name="eye" {...props} />} {...props} />}
            /> */}
                <Image source={{ uri: image }} style={{ height: 200, width: 200, alignSelf: "center" }} />
                <BackdropSubheader style={styles.header} title="Name" />
                <TextInput style={styles.input} label="Title" variant="standard" value={name.title} />
                <TextInput style={styles.input} label="First Name" variant="standard" value={name.first} />
                <TextInput style={styles.input} label="Last Name" variant="standard" value={name.last} />
                <Text style={styles.spacer} />
                <BackdropSubheader style={styles.header} title="Date of Birth" />
                <TextInput style={styles.input} label="Date" variant="standard" value={dob.date} />
                <TextInput style={styles.input} label="Age" variant="standard" value={dob.age} />
                <TextInput style={styles.input} label="Email" variant="standard" value={email} />
            </Stack>
        </ScrollView>
        // </View>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
        textDecorationLine: "underline",
        fontSize: 20,
    },
    input: {
        marginVertical: 15,
    },
    header: {
        color: "blue",
        fontWeight: "bold",
    },
    spacer: {
        marginVertical: 20,
    },
});

export default HomeScreen;
