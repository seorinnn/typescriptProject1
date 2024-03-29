import { GluestackUIProvider, Center, Image, Text, Box, VStack } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';
import {Webtoon} from '../types';
import LargeView from '../components/Card/LargeView';

//데이터타입 지정
interface WebtoonResponse {
  webtoons: Webtoon[];
}

//데이터 가져오기
  const fetchWebtoons= async() => {
    const res= await fetch('https://korea-webtoon-api.herokuapp.com');
    return res.json();
  };

export default function MySwiper() {
    const { data } = useQuery<WebtoonResponse> ({
      queryKey: ['korea-webtoon-api.herokuapp.com'],
      queryFn: fetchWebtoons,
    });

  return (
    <Swiper>
      {data
        ? data.webtoons.map((webtoon)=> <LargeView webtoon={webtoon}/>): [] }
    </Swiper>
  );
}
