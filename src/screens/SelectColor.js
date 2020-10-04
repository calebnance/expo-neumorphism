import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants';

// components
import LineItemColor from '../components/LineItemColor';

// context
import { colorOptions, ColorContext } from '../context/ColorContext';

const SelectColor = ({ navigation }) => (
  <ColorContext.Consumer>
    {({ color }) => (
      <View style={styles.container}>
        <View style={styles.containerSelect}>
          {Object.keys(colorOptions).map(key => (
            <LineItemColor
              active={color === key}
              key={key}
              navigation={navigation}
              value={key}
            />
          ))}
        </View>
      </View>
    )}
  </ColorContext.Consumer>
);

SelectColor.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1
  },
  containerSelect: {
    maxWidth: 400,
    width: '100%'
  }
});

export default SelectColor;
