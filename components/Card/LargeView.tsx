import { GluestackUIProvider, Center, Image, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import { Webtoon } from '../../types';

//types.ts 에서 지정한 Webtoon
interface LargeViewProp {
  webtoon: Webtoon;
}

export default function LargeView({webtoon}: LargeViewProp) {
  return (
        <VStack 
          bg='$rose200' 
          width={Dimensions.get('window').width} 
          height='100%' 
          justifyContent='flex-end' 
          pl={30} 
          pb={45}>
          <Image 
            position='absolute'
            alt='webtoon' 
            size='full' 
            source={{
              uri: webtoon.img,
            }}
          />
          <Text size='xl' color='$white' fontWeight='$bold'>
            {webtoon.author}
            </Text>
          <Text size='md' color='$white' fontWeight='$bold'>
            {webtoon.title}
            </Text>
        </VStack>
  );
}
