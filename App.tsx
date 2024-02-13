import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import Counter from './components/Counter';
import MySwiper from './components/MySwiper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import WebtoonList from './components/WebtoonList';

const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <VStack width='100%' height='100%' bg='$rose200'>
          <ScrollView>
          <Center width='100%' height={350}>
            <MySwiper/>
          </Center>
          <VStack bg='$rose200' height={1300}>
            <WebtoonList/>
          </VStack>
          </ScrollView>
        </VStack>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}