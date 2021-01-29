import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './src/RootNavigation';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import CheckoutScreen from './src/screens/CheckoutScreen';
import StoreScreen from './src/screens/StoreScreen';
import HeaderIcon from './src/components/HeaderIcon';
import iconBack from './src/assets/icon-back.png';
import { appColors } from './src/resources/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerBackImage: () => <HeaderIcon source={iconBack} />,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: appColors.backgroundGeneral,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTitle: '',
        }}
      >
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
    <Toast ref={(ref) => Toast.setRef(ref)} />
  </Provider>
);
