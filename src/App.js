import React from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './Navigations/Navigator';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;