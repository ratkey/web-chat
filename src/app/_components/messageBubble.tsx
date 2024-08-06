import { Avatar, HStack, Text } from "@chakra-ui/react";

interface Props {
  message: string;
  image?: string | null;
  reverse?: boolean;
}

export default function MessageBubble(props: Props) {
  const { message, image } = props;
  return (
    <>
      <HStack>
        <Avatar size={"sm"} src={image ?? undefined} />
        <Text>{message}</Text>
      </HStack>
    </>
  );
}
