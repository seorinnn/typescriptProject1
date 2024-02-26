import { GluestackUIProvider, Center, Image, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import {Webtoon} from '../types';
import MediumCard from './Card/MediumCard';
import { WebtoonResponse } from '../types';

//데이터 가져오기
  const fetchWebtoons= async() => {
    const res= await fetch('https://korea-webtoon-api.herokuapp.com');
    return res.json();
  };

export default function WebtoonList() {
    const { data } = useQuery<WebtoonResponse> ({
      queryKey: ['korea-webtoon-api.herokuapp.com'],
      queryFn: fetchWebtoons,
    });

  return (
    <VStack>
      {data
        ? data.webtoons.map((webtoon)=> <MediumCard webtoon={webtoon}/>): [] }
    </VStack>
  );
}
