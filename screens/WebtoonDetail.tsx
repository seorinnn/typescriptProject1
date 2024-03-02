import {
  Button,
  Center,
  HStack,
  Icon,
  StarIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Image } from "expo-image";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ScreensParams } from "../types";
import { useReadWebtoons } from "../hooks/useReadWebtoons";
import { useEffect } from "react";

//타입 지정
type DetailScreenRouteProp = RouteProp<ScreensParams, "Detail">;

export default function WebtoonDetail() {
  const route = useRoute<DetailScreenRouteProp>();

  //상태관리
  const { add } = useReadWebtoons();

  const webtoon = route.params.webtoon;

  //webtoon이 없는 경우
  if (!webtoon) {
    return;
  }

  //webtoon의 상태가 바뀔 때마다 호출되는 함수
  useEffect(() => {
    if (webtoon) {
      add(webtoon);
    }
  }, [webtoon]);

  return (
    <VStack width="$full" height="$full" bg="$red300">
      <Image
        style={{ width: "100%", height: 300, marginBottom: 20 }}
        source={webtoon.img}
        contentFit="contain"
        transition={2000}
      />
      <VStack px={10}>
        <Text size="md" color="$white" fontWeight="$bold">
          {webtoon.title}
        </Text>
        <Text size="sm" color="$white" fontWeight="$bold">
          {webtoon.author}
        </Text>
        <HStack gap="$1">
          <Icon as={StarIcon} color="$yellow400" fill="$yellow300"></Icon>
          <Text size="sm" color="$white" fontWeight="$bold">
            {webtoon.fanCount}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
