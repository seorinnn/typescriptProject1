import { Center, Text, Box, VStack, Button, ButtonIcon, EditIcon, ScrollView, SearchIcon} from '@gluestack-ui/themed';
import WebtoonList from '../components/WebtoonList';
import MySwiper from '../components/MySwiper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ScreensParams } from '../types';


export default function HomeScreen() {

  const navigation= useNavigation<NavigationProp<ScreensParams>>();

  return (
          <ScrollView flex={1} width='$full'>
          <Box position='absolute' right={20} top={20} zIndex={1}>
            <Button borderRadius='$full' size='lg' bg='#000000000' p='$3.5' borderColor='$indigo600' onPress={()=>navigation.navigate('Search')}>
              <ButtonIcon as={SearchIcon} color='$rose600'/>
            </Button>
          </Box>
          <Center width='100%' height={350}>
            <MySwiper/>
          </Center>
          <VStack bg='$rose200' height={1300}>
            <WebtoonList/>
          </VStack>
          </ScrollView>
  );
}