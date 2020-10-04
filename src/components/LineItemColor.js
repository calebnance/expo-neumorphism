import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, gStyle } from '../constants';

// context
import { colorOptions, ColorContext } from '../context/ColorContext';

const LineItemColor = ({ active, navigation, value }) => {
  const { setColor } = React.useContext(ColorContext);
  const { base, name } = colorOptions[value];

  const borderColor = active ? colors.black : 'transparent';
  const colorCircleExt = { backgroundColor: base, borderColor };

  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={() => {
        setColor(value);
        navigation.goBack();
      }}
      style={styles.container}
    >
      <View style={[styles.colorCircle, colorCircleExt]} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

LineItemColor.propTypes = {
  // required
  active: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexRowCenterAlign,
    ...gStyle.p2,
    backgroundColor: colors.white,
    width: '100%'
  },
  colorCircle: {
    ...gStyle.mR2,
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    width: 40
  },
  text: {
    fontSize: 18
  }
});

export default LineItemColor;
