import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './search/search.js'
import Navigation from './navigation/navigation.js'
export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
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
});
