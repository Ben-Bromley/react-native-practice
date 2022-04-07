import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.loginContainer}>
            <View style={styles.loginSubContainer}>
                <View style={styles.loginTitleContainer}>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder="Email" />
                    <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
                    <Pressable style={styles.primaryButton} onPress={() => navigation.replace('Root')}>
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                    <Text style={styles.linkText}>Forgotten Password?</Text>
                </View>
                <View style={styles.orContainer}>
                    <View style={styles.hr} />
                    <Text style={styles.text}>Or</Text>
                    <View style={styles.hr} />
                </View>
                <View style={styles.socialLoginContainer}>
                    <Pressable><Text style={styles.text}>
                        <Icon name="logo-facebook" size={18} /> Sign In</Text>
                    </Pressable>
                    <Pressable><Text style={styles.text}>
                        <Icon name="logo-google" size={18} /> Sign In</Text>
                    </Pressable>
                </View>
                <Text style={styles.text}>Don't Have an Account?{' '}
                    <Text style={styles.linkText} onPress={() => navigation.navigate('Signup')}
                    >Sign Up</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    );
}

// ------------ Login Styles ------------ //
const styles = StyleSheet.create({
    inputLabel: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5
    },
    title: {
        color: 'white',
        fontSize: 35
    },
    loginContainer: {
        minHeight: '100%',
        minWidth: '100%',
        backgroundColor: '#222d42',
        // backgroundColor: '#1a212e',
    },
    loginSubContainer: {
        marginTop: 20,
        maxHeight: '90%',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    loginTitleContainer: {
        minWidth: '100%',
        alignItems: 'center'
    },
    formContainer: { alignItems: 'center' },
    textInput: {
        fontSize: 18,
        backgroundColor: 'white',
        minWidth: '85%',
        marginBottom: 15,
        borderRadius: 5,
        padding: 15
    },
    primaryButton: {
        minWidth: '85%',
        backgroundColor: '#366cc9',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginBottom: 15
    },
    linkText: {
        color: 'white',
        textDecorationLine: 'underline',
        marginTop: 5,
    },
    text: { color: 'white', fontSize: 18 },
    orContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    hr: {
        backgroundColor: 'white',
        width: '38%',
        height: StyleSheet.hairlineWidth
    },
    socialLoginContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
});