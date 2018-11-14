import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { firstValue:'', secondValue:'', sum: 0 };
  }

  plusButton = () => {
    this.setState({
      sum: parseInt(this.state.firstValue) + parseInt(this.state.secondValue)
    });
  }
  minusButton = () => {
    this.setState({
      sum: parseInt(this.state.firstValue) - parseInt(this.state.secondValue)
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>Result: {this.state.sum}</Text>
        <TextInput keyboardType="numeric" style={{
          width: 200, borderColor: 'gray',
          borderWidth: 2
        }}
          onChangeText={(firstValue) => this.setState({ firstValue })}
          value={this.state.firstValue}
        />
        <TextInput keyboardType="numeric" style={{
          width: 200, borderColor: 'gray',
          borderWidth: 2
        }}
          onChangeText={(secondValue) => this.setState({ secondValue })}
          value={this.state.secondValue} />

        <View style={styles.button}>
          <Button onPress={this.plusButton} title="+" color="#ffffff" />

        </View>
        <View style={styles.button}>
          <Button onPress={this.minusButton} title="-" color="#ffffff" />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});
