import {HStack, Text} from '@gluestack-ui/themed';

interface Props {
  count:number;
  inputNumber: number;
}

export default function NumberPreview({count, inputNumber}:Props) {
  return (
    <HStack gap={50}>
      <Text size='6xl' bold={true} color='$orange700'>
        {count-inputNumber}
      </Text>
      <Text size='6xl' bold={true} color='$orange700'>
        {count+inputNumber}
      </Text>
    </HStack>
    
  )
}