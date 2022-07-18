import App from './src/App';
import { AppRegistry } from 'react-native';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import { name as appName } from './app.json';
import utilities from './tailwind.json';

const MainApp = () => (
  <TailwindProvider utilities={utilities}>
    <App />
  </TailwindProvider>
);

AppRegistry.registerComponent(appName, () => MainApp);
