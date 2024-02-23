import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

export default function ScreenThree() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Center width='$full' height='$full' bg='$red300' gap={10}>
      <Text>Screen 3</Text>
      <Button onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button onPress={() => navigation.navigate('One')}>
        <Text>Go Screen 1</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Two')}>
        <Text>Go Screen 2</Text>
      </Button>
    </Center>
  );
}
