import { SafeAreaView, Text, View } from 'react-native';

import { Button } from '../components';
import React from 'react';
import { sampleState } from '../utils/states/common';
import { useRecoilValue } from 'recoil';
import { useTailwind } from 'tailwind-rn';

function Home({ navigation }) {
  const tailwind = useTailwind();
  const _sampleState = useRecoilValue(sampleState);

  return (
    <SafeAreaView style={tailwind('h-full')}>
      <View style={tailwind('pt-12 items-center')}>
        <Text>{_sampleState}</Text>
        <Button
          label="Go To Settings"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
