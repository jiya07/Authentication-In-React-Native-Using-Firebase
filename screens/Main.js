import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation
        this.state = { loading: false }
    }
    
    getStart=()=> {
        firebase.auth().onAuthStateChanged(user =>
            this.navigation.navigate(user ? 'Home' : 'Login'));
        this.setState({ loading: true })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image source={require('../assets/bg.png')} style={styles.image} />
                </View>

                <Text style={styles.mainText}>Welcome</Text>
                <TouchableOpacity onPress={this.getStart} style={styles.button}>
                    <Text style={styles.buttonText}>Let's Get Started</Text>
                </TouchableOpacity>

                <View style={{ margin: 10 }}>
                    {this.state.loading && <ActivityIndicator size="large" color="white" />}
                </View>

            </View>

        )
    }
}
const styles=StyleSheet.create({
    container:{flex: 1, justifyContent: "center", alignItems: "center" },
    image:{ flex: 1, width: "100%" },
    mainText:{fontSize: 35, fontWeight: "600", color: "white"},
    button:{height: 50, width: 350, alignItems: "center", justifyContent: "center", backgroundColor: "white", borderRadius: 20, margin: 10, marginTop: 50 },
    buttonText:{ fontSize: 20, color: "#7D7BCF" }
})