import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Simple conditional rendering instead of navigation
  return isAuthenticated ? <HomeScreen /> : <LoginScreen />;
};

export default AppNavigator;
