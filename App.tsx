import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { SafeAreaView } from '@gluestack-ui/themed';
import DashboardScreen from './screens/DashboardScreen';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import CounterScreen from './screens/CounterScreen';

const Stack= createStackNavigator<RootStackParamList>();

const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
          <SafeAreaView flex={1} bg='$backgroundark950'>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Counter" component={CounterScreen} options={{header:()=>(null)}}/>
                <Stack.Screen name="One" component={ScreenOne}  options={{header:()=>(null)}}/>
                <Stack.Screen name="Two" component={ScreenTwo} options={{header:()=>(null)}}/>
                <Stack.Screen name="Three" component={ScreenThree} options={{header:()=>(null)}}/>
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}