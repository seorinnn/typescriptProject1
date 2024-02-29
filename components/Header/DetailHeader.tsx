import { HStack } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { ScreensParams } from '../../types';

export default function DetailHeader() {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack position='absolute' height={50} alignItems='center' ml={10} gap={10}>
      <Pressable onPress={()=> navigation.goBack()}>
        <Ionicons name='chevron-back' size={40}/>
      </Pressable>
      
    </HStack>
  );
}
