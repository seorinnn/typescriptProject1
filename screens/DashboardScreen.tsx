import {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider, Center, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { SafeAreaView } from 'react-native-safe-area-context';
const queryClient= new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
          
      </GluestackUIProvider>
    </QueryClientProvider>
    
  );
}