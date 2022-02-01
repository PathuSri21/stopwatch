import  React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Stopwcont from "./cont";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tit}>STOPWATCH</Text>
      <Stopwcont />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "8%",
  },

  tit: {
    fontSize: 40,
    paddingTop: 35,
    color: "#000",
    fontWeight: "bold",
    marginBottom: "8%"
  }
});
