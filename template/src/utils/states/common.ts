import { atom } from 'recoil';

const sampleState = atom({
  key: 'sample', // unique ID (with respect to other atoms/selectors)
  default: 'Sample', // default value (aka initial value)
});

export { sampleState };
