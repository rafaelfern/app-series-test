import React, { Component, useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Image, Button, ActivityIndicator, Alert, Modal  } from 'react-native';
//import Spinner from 'react-spinkit';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

import { connect } from 'react-redux';
import { tryLogin } from '../store/actions'

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            isFocused: false,
            isLoading: false,
            message: '',
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyCNLsULf5cv6Z8IlbHuhLDb9Tn_tfBfSCI",
            authDomain: "series-1fcea.firebaseapp.com",
            databaseURL: "https://series-1fcea.firebaseio.com",
            projectId: "series-1fcea",
            storageBucket: "series-1fcea.appspot.com",
            messagingSenderId: "1016026982163",
            appId: "1:1016026982163:web:9eac16d976be920f"
        };

        firebase.initializeApp(firebaseConfig);
    }

    handleInputFocus = () => {
        this.setState({isFocused : true});
    }

    handleInputBlur = () => {
        this.setState({isFocused : false});
    }

    handleInput = (field, value) => {
        //Using Computer Property Names
        this.setState({
            [field] : value
        })
    }

    

    /*
        Fazer um switch(errorCode){ case: err.code } para tratar os códigos de erro dentro da função

        Ou uma ideia é criar um objeto:
        
        const errorsMessage = {
            'auth/wrong-password' : 'mensagem'
        }

        e recuperar: 
        errorsMessage[errorCode]
    
        getMessageByErrorCode(errorCode) {

    }
    */
    
    renderMessage = () => {
        console.log('msg', this.state.message);
        const { message } = this.state;
        console.log('msg2', message.message);
        if(!message)
            return null;
        
        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }

    handleLogin() {
        this.setState({isLoading: true, message: ''});
        const { email, password } = this.state;

        this.props.handleLogin(email,password)
    }

    render() {
        return(
            <View style={styles.containerForm}>
                                    
                <TextInput 
                    value={this.state.email}
                    onChangeText={value => this.handleInput('email', value)}
                    onFocus={ () => {this.handleInputFocus()}}
                    onBlur={ () => this.handleInputBlur()}
                    style={[styles.containerInput, {
                        borderColor: this.state.isFocused ? '#ffb3b3' : '#ddd',
                        borderWidth: this.state.isFocused ? 2 : 1,
                                    
                    }]}
                />
                
                <TextInput
                    placeholder="******"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={value => this.handleInput('password', value)}
                    onFocus={ () => this.handleInputFocus()}
                    onBlur={ () => this.handleInputBlur()}
                    style={[styles.containerInput, {
                        borderColor: this.state.isFocused ? '#ffb3b3' : '#ddd',
                        borderWidth: this.state.isFocused ? 2 : 1,
                    }]}
                />

                {
                    this.state.isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <Button 
                            title='Entrar'
                            onPress={() => {this.handleLogin()}}
                        />
                    )
                }
                {this.renderMessage()}
                
                
            </View>
        )
    }

}

const styles = StyleSheet.create({

    containerForm: {
        
        paddingTop: 20,
    },
    
    containerInput: {
        width: 500,
        borderRadius: 6,
        paddingVertical: 5,
        paddingLeft: 15,
        marginTop: 10,
        marginHorizontal: 50,
        fontSize: 16,
        color: '#0A100D'
    }

})

export default connect(null, {handleLogin})(LoginScreen)
