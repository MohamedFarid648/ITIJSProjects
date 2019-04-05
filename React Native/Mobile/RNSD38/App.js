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
  View, Button, TextInput
} from 'react-native';
import ChildComp from './Components/childComponent'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myname: "moniem",
      text: ""
    }
  }

  createHelloElement()
  {
    return (<Text>Hello ana CreateHelloElement function</Text>)
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 0.2 }}>
          <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
            <View style={{ flex: 0.5 }}>
              <Button title="clickme" onPress={() => {
                this.setState({ myname: "z3bola" })
              }}></Button>
            </View>
            <View style={{ flex: 0.5 }}>
              <Text>Hello {this.state.myname}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.2 }}>
          <Text>ana parent w t7ty child</Text>
          <TextInput onChangeText={(writtenText) => {
            this.setState({ text: writtenText })  
          }} value={this.state.text} />
          <Text style={{color:"blue"}}>{this.state.text}</Text>
          <ChildComp text={this.state.text}></ChildComp>
          {this.createHelloElement()}
        </View>
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
