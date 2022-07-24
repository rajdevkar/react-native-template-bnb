import { Pressable, Text } from 'react-native';

import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';

interface Props {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: Props) => {
  const tailwind = useTailwind();

  return (
    <Pressable
      style={tailwind('bg-blue-200 px-3 py-1 rounded-full mt-4')}
      onPress={onPress}>
      <Text style={tailwind('text-blue-800 font-semibold')}>{label}</Text>
    </Pressable>
  );
};

export default Button;
