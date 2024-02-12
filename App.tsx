import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import Counter from './components/Counter';
import MySwiper from './components/MySwiper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import MediumCard from './components/Card/MediumCard';

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
          <VStack bg='$rose200' height={1000}>
            <MediumCard 
              webtoon={{
              webtoonId:2000000002473,
              title:"이번 생은 가주가 되겠습니다",
              author:"ANTSTUDIO,몬(ANTSTUDIO)",
              img:"https://kr-a.kakaopagecdn.com/P/C/2473/c1/2x/1edc518c-f131-41fd-b94c-431eb719ff00.png",
              fanCount:124,
            }}/>
          </VStack>
          </ScrollView>
        </VStack>
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}