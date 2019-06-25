import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';



export default createAppContainer(
	/*	
		Objetos e configurações do createStackNavigator
		https://reactnavigation.org/docs/en/hello-react-navigation.html
	*/
	createStackNavigator(
		{
			Login: {	
				screen: LoginScreen,
				navigationOptions: {
					title: 'Login - Séries',
				}	
			},
			SeriesPage: {
				screen: SeriesPage
			}
		},
		{
			defaultNavigationOptions: {
				headerTitle: 'Séries',
				headerTintColor: '#333333',
				headerStyle: {
					backgroundColor: '#ffb3b3',
					borderBottomWidth: 1,
					borderBottomColor: '#C5C5C5',
				},
				headerTitleStyle: {
					fontFamily: 'Roboto',
					fontWeight: '200',
					fontSize: 30,
					color: '#333333'
				}

			}
		},
	)
);


