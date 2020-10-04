import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, gStyle } from '../constants';

// components
import NeuButton from '../components/NeuButton';

// context
import { ColorContext } from '../context/ColorContext';

class Home extends React.Component {
  constructor(props, context) {
    super(props);

    const { colorObj } = context;

    const gradArray = [colorObj.lighter, colorObj.darker];

    this.state = {
      showLinear: false,
      gradArray
    };

    this.simple = this.simple.bind(this);
    this.pressedOn = this.pressedOn.bind(this);
    this.pressedOff = this.pressedOff.bind(this);
  }

  simple() {
    this.setState({
      showLinear: false
    });
  }

  pressedOn() {
    const { colorObj } = this.context;
    const gradArray = [colorObj.darker, colorObj.lighter];

    this.setState({
      showLinear: true,
      gradArray
    });
  }

  pressedOff() {
    const { colorObj } = this.context;
    const gradArray = [colorObj.lighter, colorObj.darker];

    this.setState({
      showLinear: true,
      gradArray
    });
  }

  render() {
    const { gradArray, showLinear } = this.state;
    const { colorObj } = this.context;
    const { base: backgroundColor } = colorObj;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <NeuButton
          colorObj={colorObj}
          gradArray={gradArray}
          showLinear={showLinear}
        />

        <View style={styles.containerBtns}>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={this.simple}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Simple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={this.pressedOn}
            style={styles.btn}
          >
            <Text style={styles.btnText}>On</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={gStyle.activeOpacity}
            onPress={this.pressedOff}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Off</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Home.contextType = ColorContext;

const styles = StyleSheet.create({
  container: {
    ...gStyle.flexCenter,
    flex: 1
  },
  containerBtns: {
    bottom: 100,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'absolute'
  },
  btn: {
    ...gStyle.pH2,
    ...gStyle.pV1,
    backgroundColor: colors.black
  },
  btnText: {
    color: colors.white
  }
});

export default Home;
