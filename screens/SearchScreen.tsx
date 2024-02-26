import { HStack, Input, InputField, VStack, Button, ButtonText, ScrollView } from '@gluestack-ui/themed';
import { WebtoonResponse } from '../types';
import { useQuery } from '@tanstack/react-query';
import MediumCard from '../components/Card/MediumCard';
import { useState } from 'react';

//데이터 가져오기
const fetchWebtoons= async(keyword:string) => {
  const res= await fetch(`https://korea-webtoon-api.herokuapp.com/search?keyword=${keyword}`);
  return res.json();
};

export default function SearchScreen() {
  const [inputText, setInputText]= useState('');
  const [keyword, setKeyword]= useState('');

  const { data } = useQuery<WebtoonResponse> ({
  queryKey: ['repoData', keyword],
  queryFn: () => fetchWebtoons(keyword),
  enabled: keyword.length>=2, //오류 막거나 필요없는 호출 막기 위해 사용
  });

  console.log(data);

  return (
    <VStack width='$full' height='$full' bg='$rose200'>
      <HStack p={20} gap={10}>
        <Input borderColor= '$rose300' flex={1} variant='outline' size='md' width={150}>
          <InputField color='$rose600' value={inputText} onChangeText={setInputText} onEndEditing={()=> setKeyword(inputText)}/>
        </Input>
        <Button size='md' action='secondary' bg='$rose500'>
          <ButtonText>취소</ButtonText>
        </Button>
      </HStack>
      <ScrollView flex={1} width='$full'>
      {data
        ? data.webtoons.map((webtoon)=> <MediumCard webtoon={webtoon}/>): [] }
      </ScrollView>
    </VStack>
    
  );
}