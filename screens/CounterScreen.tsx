import {
    AddIcon,
    Button,
    ButtonIcon,
    Center,
    HStack,
    Input,
    InputField,
    RemoveIcon,
    Text,
    VStack,
  } from '@gluestack-ui/themed';
  import { useState } from 'react';
import NumberBoard from '../components/Counter/NumberBoard';
import NumberInput from '../components/Counter/NumberInput';
import NumberPreview from '../components/Counter/NumberPreview';
  
  export default function CounterScreen() {
    const [count, setCount]= useState(0);
    const [inputNumber, setInputNumber]= useState(0);

    //입력 숫자 변경 함수
    const handleChangeInputNumber=(nextNumber:number)=>{
        setInputNumber(nextNumber);
    }

    // + 버튼 함수
    const handlePlus=()=>{
        setCount(count+inputNumber);
        setInputNumber(0);
    }

    // - 버튼 함수
    const handleMinus=()=>{
        setCount(count-inputNumber);
        setInputNumber(0);
    }
  
  
    return (
        <Center width='$full' height='$full' bg='$red200' gap={100}>
        <Text size='4xl' bold={true}>
          This is My Counter
        </Text>
        <NumberBoard count={count}/>
        <VStack gap={30} alignItems='center'>
          <NumberInput inputNumber={inputNumber} onChangeInputNumber={handleChangeInputNumber}/>
          <HStack justifyContent='center' gap={30}>
            <Button size='xl' action='negative' onPress={handleMinus}>
              <ButtonIcon size='xl' as={RemoveIcon} />
            </Button>
            <Button size='xl' action='positive' onPress={handlePlus}>
              <ButtonIcon size='xl' as={AddIcon} />
            </Button>
          </HStack>
          <NumberPreview count={count} inputNumber={inputNumber}/>
        </VStack>
      </Center>
    );
  }