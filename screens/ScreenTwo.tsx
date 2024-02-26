import { Button, Center, Text } from '@gluestack-ui/themed';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CounterScreensParams } from '../types';

export default function ScreenTwo() {
  const navigation = useNavigation<NavigationProp<CounterScreensParams>>();

  return (
    <Center width='$full' height='$full' bg='$red300' gap={10}>
      <Text>Screen 2</Text>
      <Button onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </Button>
      <Button onPress={() => navigation.navigate('One')}>
        <Text>Go Screen 1</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Three')}>
        <Text>Go Screen 3</Text>
      </Button>
    </Center>
  );
}
