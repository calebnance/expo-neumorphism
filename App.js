import * as React from 'react';
import { StatusBar } from 'react-native';

// grab navigation root stack
import RootStack from './src/navigation/RootStack';

// context
import { colorOptions, ColorContext } from './src/context/ColorContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const defaultColor = 'pictonBlue';

    this.state = {
      color: defaultColor,
      colorObj: colorOptions[defaultColor]
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor(color) {
    this.setState({ color, colorObj: colorOptions[color] });
  }

  render() {
    const { color, colorObj } = this.state;

    return (
      <ColorContext.Provider
        value={{ color, colorObj, setColor: this.setColor }}
      >
        <StatusBar barStyle="dark-content" />

        <RootStack />
      </ColorContext.Provider>
    );
  }
}
