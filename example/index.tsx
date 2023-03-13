import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CrochetSupport from '../src/index';

const App = () => {
  return <div></div>;
};

ReactDOM.render(
  <CrochetSupport
    buttonStyle={{
      backgroundColor: '#ff0',
      color: '#000000',
      position: 'fixed',
      bottom: 10,
      borderRadius: 10,
      // left: '50%',
      right: 0,
      transform: 'translateX(-50%)',
    }}
    buttonText="Report bug"
    config={{
      showWidget: true,
      silentMode: false,
      errorPriority: 'High',
      recipient: '',
    }}
  >
    <App />
  </CrochetSupport>,
  document.getElementById('root')
);
