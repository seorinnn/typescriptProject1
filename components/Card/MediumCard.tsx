import {
  GluestackUIProvider,
  Icon,
  Center,
  Image,
  Text,
  Box,
  VStack,
  HStack,
  StarIcon,
  Pressable,
  Button,
  ButtonIcon,
  CloseIcon,
} from "@gluestack-ui/themed";
import { ScreensParams, Webtoon } from "../../types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

//types.ts 에서 가져온 Webtoon
interface MediumCardProp {
  webtoon: Webtoon;
  showCloseButton?: boolean;
  onPressCloseButton?: () => void;
}

export default function MediumCard({
  webtoon,
  showCloseButton,
  onPressCloseButton,
}: MediumCardProp) {
  const navigation = useNavigation<NavigationProp<ScreensParams>>();
  return (
    <HStack>
      <Pressable
        flex={1}
        borderWidth="$1"
        borderBlockColor="$rose300"
        borderLeftColor="$rose300"
        borderRightColor="$rose300"
        flexDirection="row"
        onPress={() => navigation.navigate("Detail", { webtoon })}
      >
        {showCloseButton && (
          <Button
            position="absolute"
            right={0}
            top={0}
            zIndex={1}
            size="lg"
            bg="#00000000"
            onPress={onPressCloseButton}
          >
            <ButtonIcon as={CloseIcon} color="$rose600" />
          </Button>
        )}

        <Image
          alt="webtoon"
          size="xl"
          source={{
            uri: webtoon.img,
          }}
        />
        <VStack justifyContent="center" pl="$5" gap="$2">
          <Text size="sm" color="$white" fontWeight="$bold">
            {webtoon.title}
          </Text>
          <Text size="xs" color="$white" fontWeight="$bold">
            {webtoon.author}
          </Text>
          <HStack gap="$1">
            <Icon as={StarIcon} color="$yellow400" fill="$yellow300"></Icon>
            <Text size="sm" color="$white" fontWeight="$bold">
              {webtoon.fanCount}
            </Text>
          </HStack>
        </VStack>
      </Pressable>
    </HStack>
  );
}
