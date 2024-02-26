import { GluestackUIProvider, Icon, Center, Image, Text, Box, VStack, HStack, StarIcon } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import { Webtoon } from '../../types';

//types.ts 에서 가져온 Webtoon
interface MediumCardProp {
  webtoon: Webtoon;
}

export default function MediumCard({webtoon}: MediumCardProp) {
  return (
        <HStack borderWidth='$1' borderBlockColor='$rose300'>
          <Image 
            alt='webtoon' 
            size='xl' 
            source={{
              uri: webtoon.img,
            }}
          />
          <VStack justifyContent='center' pl='$5' gap='$2'>
            <Text size='md' color='$white' fontWeight='$bold'>
              {webtoon.title}
            </Text>
            <Text size='sm' color='$white' fontWeight='$bold'>
              {webtoon.author}
            </Text>
            <HStack gap='$1'>
              <Icon as={StarIcon} color='$yellow400' fill='$yellow300'></Icon>
              <Text size='sm' color='$white' fontWeight='$bold'>
                {webtoon.fanCount}
              </Text>
            </HStack>
            
          </VStack>
          
        </HStack>
  );
}
