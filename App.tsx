/**
 * React Native Authentication App with Redux Persist
 * Demonstrates persistent login state using Redux Toolkit and AsyncStorage
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import { store, persistor } from './src/store/store';
import AppNavigator from './src/components/AppNavigator';
import LoadingScreen from './src/components/LoadingScreen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
