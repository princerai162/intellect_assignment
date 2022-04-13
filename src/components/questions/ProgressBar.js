import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import RangeSlider from 'rn-range-slider';
import Rail from '../slider/Rail';
import RailSelected from '../slider/RailSelected';
import Thumb from '../slider/Thumb';

const Progressbar = () => {
  const [value, setValue] = useState(0);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const handleSliderChange = useCallback((low, high) => {
    setValue(low);
  }, []);

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 280,
            height: 280,
            borderRadius: 280 / 2,
            borderColor: '#819da7',
            borderWidth: 3,
            borderStyle: 'dashed',
          }}>
          <View
            style={{
              width: 200,
              height: 200,
              borderRadius: 200 / 2,
              backgroundColor: '#456d7c',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 140,
                height: 140,
                borderRadius: 140 / 2,
                backgroundColor: '#6edbe6',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 35, fontWeight: 'bold', color: '#fff'}}>
                {value}
              </Text>
            </View>
            <Progress.Circle
              progress={value / 10}
              size={200}
              color="#fff"
              borderWidth={0}
              style={{position: 'absolute'}}
              unfilledColor="#325d6e"
              thickness={5}
              
            />
          </View>
        </View>
      </View>

      <RangeSlider
        style={styles.slider}
        low={value}
        min={0}
        max={10}
        step={1}
        disableRange
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        onValueChanged={handleSliderChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 50,
    marginHorizontal: 15,
  },
});

export default Progressbar;
