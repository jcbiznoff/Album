// index.ios.js - placeholder here for IOS

//1.Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//2. Create a component
// careful style needs flex 1 for scroll view
const App = () => (
	<View style={{flex:1}}>
		<Header headerText = {'Albums!'} />
		<AlbumList/>
	</View>
);

//3. Render it do the device
AppRegistry.registerComponent('albums', () => App);