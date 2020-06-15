import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';

export default class Home extends React.Component {
    state = {
        email: "",
        displayName: ""
    }
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName })
    }
    logout = () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image source={require('../assets/bg.png')} style={styles.bgImage} />
                </View>

                <Text style={styles.text}>Hey There {this.state.displayName} {this.state.email}! You are now Logged in </Text>
                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    mainContainer: { flex: 1, alignItems: "center" },
    bgImage: { flex: 1, width: "100%" },
    text: { textAlign: "center", fontSize: 25, marginTop: 350, fontWeight: "500", color: "white" },
    button: { height: 45, width: 300, marginTop: 250, alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 20, margin: 10, marginTop: 50 },
    buttonText: { fontSize: 20, color: "#7D7BCF" }

})