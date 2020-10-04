import * as React from 'react';

export const colorOptions = {
  pictonBlue: {
    base: '#55b9f3',
    lighter: '#62d5ff',
    darker: '#489dcf',
    name: 'Picton Blue'
  },

  manhattan: {
    base: '#f3cc91',
    lighter: '#ffeba7',
    darker: '#cfad7b',
    name: 'Manhattan'
  },

  saharaSand: {
    base: '#e9f391',
    lighter: '#ffffa7',
    darker: '#c6cf7b',
    name: 'Sahara Sand'
  },

  sulu: {
    base: '#b8f391',
    lighter: '#d4ffa7',
    darker: '#9ccf7b',
    name: 'Sulu'
  },

  mauvelous: {
    base: '#f391b8',
    lighter: '#ffa7d4',
    darker: '#cf7b9c',
    name: 'Mauvelous'
  }
};

export const ColorContext = React.createContext({
  // default value
  color: colorOptions.pictonBlue,

  // update context function
  setColor: () => {}
});
