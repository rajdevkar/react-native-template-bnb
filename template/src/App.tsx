import Home from './pages/Home';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Setting from './pages/Setting';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </RecoilRoot>
  );
}

export default App;
