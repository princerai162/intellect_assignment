import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const StepsContainer = ({steps, subject}) => {
  const windowWidth = Dimensions.get('window').width;
  const [activeStep, setActiveStep] = useState(0);

  const nextSlide = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepsContainer}>
        {steps.map((item, i) => {
          return (
            <View key={i} style={{width: windowWidth / steps.length}}>
              <View
                style={[
                  styles.stepBar,
                  {backgroundColor: activeStep === i ? '#fff' : '#819da7'},
                ]}
              />
            </View>
          );
        })}
      </View>
      <Text style={styles.subjectTitle}>{subject}</Text>

      <Text style={styles.questionText}>{steps[activeStep].question}</Text>
      <View
        style={{
          display: steps[activeStep].renderQuestion === null ? 'none' : 'flex',
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        {steps[activeStep].renderQuestion}
      </View>

      <TouchableOpacity style={styles.nextButtonContainer} onPress={nextSlide}>
        <View style={styles.nextButton}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  stepsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  stepBar: {
    height: 6,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  nextButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#fff',
    borderRadius: 40,
    marginHorizontal: 20,
    marginVertical: 20,
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  subjectTitle: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginTop: 3,
  },
  questionText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 30,
    marginHorizontal: 5,
  },
});

export default StepsContainer;
