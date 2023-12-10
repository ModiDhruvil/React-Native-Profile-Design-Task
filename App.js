import { SafeAreaView } from 'react-native';
import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />
    </SafeAreaView>
  );
};

export default App;
