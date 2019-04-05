/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, Button
} from 'react-native';



export default class ChildComp extends Component {
    render() {
        
        return (
            <View>
                <Text>Ana Child Component</Text>
                <Text style={{ color: "green", borderColor: "red", borderWidth: 1 }}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
