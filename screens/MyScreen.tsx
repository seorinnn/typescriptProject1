import { Button, Center, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import { useReadWebtoons } from "../hooks/useReadWebtoons";
import MediumCard from "../components/Card/MediumCard";

export default function MyScreen() {
  const { webtoons, remove } = useReadWebtoons();
  console.log(webtoons);

  //현재 보고있는 웹툰이 있을 때, 없을 때로 나누어 화면 구성
  return (
    <VStack flex={1} width="$full" height="$full" bg="$rose200">
      <Text color="$white" padding={20}>
        내가 보고 있는 웹툰
      </Text>
      {webtoons.length > 0 ? (
        <ScrollView flex={1} width="$full" height="$full" bg="$rose200">
          <VStack gap={12} px={20}>
            {webtoons.map((webtoon) => (
              <MediumCard
                key={webtoon.webtoonId}
                webtoon={webtoon}
                showCloseButton={true}
                onPressCloseButton={() => remove(webtoon)}
              />
            ))}
          </VStack>
        </ScrollView>
      ) : (
        <Center flex={1}>
          <Text color="$white" padding={20}>
            현재 보고 있는 웹툰이 없습니다.
          </Text>
        </Center>
      )}
    </VStack>
  );
}
