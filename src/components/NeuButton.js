import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// context
import { ColorContext } from '../context/ColorContext';

// idk...
const SQUARE = 200; // 200
const SQUARE_RADIUS = SQUARE / 5; // 40
const OFFSET = SQUARE_RADIUS / 2; // 20
const SHADOW_RADIUS = OFFSET; // 6

const NeuButton = ({ gradArray, showLinear }) => (
  <ColorContext.Consumer>
    {({ colorObj }) => {
      const { base: backgroundColor, darker, lighter } = colorObj;
      const topLeft = { backgroundColor, shadowColor: lighter };
      const bottomRight = { backgroundColor, shadowColor: darker };

      return (
        <View style={[styles.box, { backgroundColor }]}>
          <View style={[styles.dropShadowTL, topLeft]} />
          <View style={[styles.dropShadowBR, bottomRight]} />

          {showLinear && (
            <LinearGradient
              colors={gradArray}
              start={[0.14, 0.5]}
              style={styles.linear}
            />
          )}
        </View>
      );
    }}
  </ColorContext.Consumer>
);

NeuButton.defaultProps = {
  showLinear: false
};

NeuButton.propTypes = {
  // required
  gradArray: PropTypes.array.isRequired,

  // optional
  showLinear: PropTypes.bool
};

const styles = StyleSheet.create({
  box: {
    borderRadius: SQUARE_RADIUS,
    height: SQUARE,
    overflow: 'visible',
    width: SQUARE
  },
  dropShadowTL: {
    borderRadius: SQUARE_RADIUS,
    height: SQUARE,
    width: SQUARE,
    shadowOffset: { width: -OFFSET, height: -OFFSET },
    shadowOpacity: 1,
    shadowRadius: SHADOW_RADIUS
  },
  dropShadowBR: {
    borderRadius: SQUARE_RADIUS,
    position: 'absolute',
    height: SQUARE,
    width: SQUARE,
    shadowOffset: { width: OFFSET, height: OFFSET },
    shadowOpacity: 1,
    shadowRadius: SHADOW_RADIUS
  },
  linear: {
    borderRadius: SQUARE_RADIUS,
    height: SQUARE,
    position: 'absolute',
    width: SQUARE
  }
});

export default NeuButton;
