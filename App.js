/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Slack from 'react-native-slack-webhook';
const webhookURL = 'web hook url'

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to react-native-slack-webhook!
        </Text>
        <TouchableOpacity onPress={()=> new Slack(webhookURL).post('Hi my dear sundari', '#web-hook-slack')}>
          <Text style={styles.instructions}>
            Press it to send message
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

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

export default App;
