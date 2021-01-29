import * as React from 'react';
import { LogHelper } from './helpers/LogHelper';

export const navigationRef = React.createRef();
export const isReadyRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function goBack() {
  if (isReadyRef.current && navigationRef.current) {
    // Go back if the app has mounted and can go back
    if (navigationRef.current.canGoBack()) {
      navigationRef.current.goBack();
    } else {
      LogHelper.w('Can not go back', 'Root Navigation');
    }
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
