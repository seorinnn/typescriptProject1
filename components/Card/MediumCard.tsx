import { GluestackUIProvider, Icon, Center, Image, Text, Box, VStack, HStack, StarIcon, Pressable } from '@gluestack-ui/themed';
import { ScreensParams, Webtoon } from '../../types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

//types.ts 에서 가져온 Webtoon
interface MediumCardProp {
  webtoon: Webtoon;
}

export default function MediumCard({webtoon}: MediumCardProp) {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
        <Pressable borderWidth='$1' borderBlockColor='$rose300' flexDirection='row' onPress={()=>navigation.navigate('Detail', {webtoon})}>
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
          
        </Pressable>
  );
}
