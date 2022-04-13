import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Pyramid = () => {
  const [pyramids, setPyramids] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(3);

  useEffect(() => {
    generatePyramid();
  }, [selectedLevel]);

  const generatePyramid = () => {
    var p = [];
    var pyramidWidth = 300;
    var backgroundColor = '#fff';
    for (let i = 5; i > 0; i--) {
      pyramidWidth = pyramidWidth - 50;
      backgroundColor = i > selectedLevel ? '#819da7' : '#fff';
      p.push(
        <TouchableOpacity key={i} onPress={() => setSelectedLevel(i)}>
          <View
            style={[
              styles.pyramidBlock,
              {width: pyramidWidth, backgroundColor: backgroundColor},
            ]}>
            <Text style={{display: 'none'}}>{i}</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    setPyramids(p);
  };

  return (
    <View style={styles.questionContainer}>
      <Text style={{fontWeight: '600', color: '#fff', marginVertical: 10}}>
        {selectedLevel > 3 ? 'High' : selectedLevel === 3 ? 'Medium' : 'Low'}
      </Text>
      {pyramids}
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pyramidBlock: {
    height: 40,
    marginVertical: 6,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 60,
    borderBottomEndRadius: 60,
  },
});

export default Pyramid;
