import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Counter from './components/Counter';
import MySwiper from './components/MySwiper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <Center flex={1} justifyContent='center' alignItems='center'>
          <Center width='100%' height='100%'>
            <MySwiper/>
          </Center>
        </Center>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}