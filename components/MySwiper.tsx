import { GluestackUIProvider, Center, Image, Text, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Swiper from 'react-native-swiper';
import {Dimensions} from 'react-native';
import { useEffect } from 'react';
import {useQuery} from '@tanstack/react-query';

  const fetchWebtoons= async() => {
    const res= await fetch('https://korea-webtoon-api.herokuapp.com');
    return res.json();
  };

export default function MySwiper() {
    const { data } = useQuery ({
      queryKey: ['korea-webtoon-api.herokuapp.com'],
      queryFn: fetchWebtoons,
    });

  return (
    <Swiper>
      {data
        ? data.webtoons.map((item:any)=> (
        <Center key={item} bg='$red200' width={Dimensions.get('window').width} height='100%'>
          <Image alt='webtoon' size='full' source={{uri: item.img,}}/>
        </Center>
      )): [] }
    </Swiper>
  );
}
