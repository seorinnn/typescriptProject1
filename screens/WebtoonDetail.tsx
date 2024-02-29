import { Button, Center, HStack, Icon, StarIcon, Text, VStack } from '@gluestack-ui/themed';
import { Image } from 'expo-image';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreensParams } from '../types';

//타입 지정
type DetailScreenRouteProp= RouteProp<ScreensParams, 'Detail'>

export default function WebtoonDetail() {
  const route=useRoute<DetailScreenRouteProp>();
  const webtoon= route.params.webtoon;

  return (
    <VStack width='$full' height='$full' bg='$red300'>
      <Image
        style={{width: '100%', height:300, marginBottom:20}}
        source={webtoon.img}
        contentFit="contain"
        transition={2000}
      />
      <VStack px={10}>
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
            
            
    </VStack>
  );
}
