import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'btnquiz': {
    'size': '30px',
    'float': 'left',
    'borderRadius': '30px',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'btnquizQuit': {
    'float': 'right',
    'borderRadius': '30px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'question-num': {
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'borderRadius': '15px',
    'width': [{ 'unit': 'string', 'value': 'fit-content' }],
    'color': 'blue',
    'height': [{ 'unit': 'string', 'value': 'max-content' }],
    // box-shadow: 0 8px 6px -6px black;
  },
  'timer': {
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'borderRadius': '15px',
    'width': [{ 'unit': 'string', 'value': 'fit-content' }],
    'color': '#1e90ff',
    'height': [{ 'unit': 'string', 'value': 'max-content' }],
    'float': 'right'
  },
  'main-card': {
    'backgroundColor': '#f1f2f6'
  },
  'option-cont': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'textcode': {
    'fontSize': [{ 'unit': 'string', 'value': 'small' }]
  },
  'option': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'backgroundColor': '#1b87e5',
    'color': 'white',
    'cursor': 'pointer',
    'borderRadius': '20px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'transition': '0.3s linear all',
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 0.9 }]
  },
  'option:hover': {
    'backgroundColor': '#1d3557'
  }
});
