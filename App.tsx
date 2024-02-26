import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { SafeAreaView } from '@gluestack-ui/themed';
import DashboardScreen from './screens/DashboardScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreensParams } from './types';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Stack= createStackNavigator<ScreensParams>();

const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
          <SafeAreaView flex={1} bg='$backgroundark950'>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='Main' component={HomeScreen} options={{ header: () => null }} />
                <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{ header: () => null }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}