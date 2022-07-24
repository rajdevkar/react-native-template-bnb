import App from './src/App';
import { AppRegistry } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import { name as appName } from './app.json';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';

const MainApp = () => (
  <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </TailwindProvider>
);

AppRegistry.registerComponent(appName, () => MainApp);
