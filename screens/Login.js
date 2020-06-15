import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput, Button, Animated } from 'react-native';
import * as firebase from 'firebase';

const { height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.height = new Animated.Value(0);
        this.navigation = this.props.navigation
        this.state = {
            email: "",
            password: "",
            errorMessage: null
        }
    }
    componentDidMount() {
        this.animateBar();
    }

    animateBar = () => {
        this.height.setValue(0);
        Animated.timing(this.height, {
            toValue: 4 * height / 5,
            delay: 1000,
            useNativeDriver: false
        }).start();
    };

    handleLogin = () => {
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => this.setState({ errorMessage: error.message }))

    }

    render() {
        let barHeight = {
            height: this.height
        };

        return (
            <View style={styles.container}>
                <View style={{ ...StyleSheet.absoluteFill }}>
                    <Image source={require('../assets/bg.png')} style={styles.image} />
                </View>
                <Text style={styles.heading}>Log In</Text>
                
                <View style={styles.content}>
                    <Animated.View style={[styles.box, barHeight]}>

                        <Text style={styles.subHeading}>Welcome Back!</Text>
                        <Text style={styles.subHeadingText}>Glad to have you back</Text>

                        <View style={styles.error}>
                            {this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                        </View>
                        <View style={styles.loginDetails}>
                            <Text style={styles.details}>EMAIL</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}

                            />
                            <Text style={styles.details}>PASSWORD</Text>
                            <TextInput
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                                style={[styles.input]}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity onPress={this.handleLogin} style={styles.login}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.signin}>
                            <Text>New Here? </Text>
                            <TouchableOpacity onPress={() => this.navigation.navigate('SignUp')}><Text style={styles.signupText}>Sign Up</Text></TouchableOpacity>
                        </View>
                    </Animated.View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        padding: 25,
        height: 4 * height / 5,
        backgroundColor: "white",
        borderRadius: 30

    },
    image: {
        flex: 1,
        width: "100%"
    },
    heading:
    {
        margin: 25,
        marginTop: 100,
        color: "white",
        fontSize: 35,
        fontWeight: "700"
    },
    content: {
        flex: 1,
        justifyContent: "flex-end"
    },
    subHeading: {
        fontSize: 25,
        fontWeight: "500",
        color: "#7D7BCF"
    },
    subHeadingText: {
        fontSize: 15,
        fontWeight: "400",
        color: "grey",
        marginTop: 10
    },
    error: {
        marginVertical: 10
    },
    errorMessage: {
        color: "red"
    },
    loginDetails:{ 
        marginVertical: 20 
    },
    details:{ 
        color: "grey", 
        marginTop: 25, 
        fontWeight: "500" 
    },
    input: {
        marginTop: 10,
        height: 25,
        borderBottomWidth: 1,
        fontSize: 15,
        borderBottomColor: "#ebe9ee",
    },
    login: {
        height: 50, 
        width: 350, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#7D7BCF", 
        borderRadius: 20, 
        margin: 10, 
        marginTop: 50
    },
    loginText:{ 
        fontSize: 20, 
        color: "white" 
    },
    signin:{ 
        justifyContent: "center", 
        flexDirection: "row", 
        alignItems: "center",
         marginTop: 20 
    },
    signupText:{ 
        color: "#7D7BCF", 
        fontWeight: "700" 
    }

});