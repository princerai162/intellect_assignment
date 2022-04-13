import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import StepsContainer from './components/StepsContainer';
import Progressbar from './components/questions/ProgressBar';
import Pyramid from './components/questions/Pyramid';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

const App = () => {
  //passing questions as array of objects with it's question component
  const Steps = [
    {
      question: 'Pick the level your anger & frustration right now',
      renderQuestion: <Progressbar />,
    },
    {
      question: 'Pick the level your anger & frustration right now',
      renderQuestion: <Pyramid />,
    },
    {
      question: 'Pick the level your anger & frustration right now',
      renderQuestion: null,
    },
    {
      question: 'Pick the level your anger & frustration right now',
      renderQuestion: null,
    },
    {
      question: 'Pick the level your anger & frustration right now',
      renderQuestion: null,
    },
  ];

  return (
    <View style={styles.appContainer}>
      <StatusBar backgroundColor="#325d6e" />
      {/* A custom container for containing all the questions */}
      <StepsContainer
        steps={Steps}
        subject="RESCUE SESSION: ANGER & FRUSTRATION"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#325d6e',
  },
});

export default App;
