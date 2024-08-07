import { Avatar, Stack, Text } from "@chakra-ui/react";

interface Props {
  message: string;
  image?: string | null;
  reverse?: boolean | null;
}

export default function MessageBubble(props: Props) {
  const { message, image, reverse } = props;
  return (
    <>
      <Stack direction={reverse ? ["row-reverse"] : ["row"]}>
        <Avatar size={"sm"} src={image ?? undefined} />
        <Text>{message}</Text>
      </Stack>
    </>
  );
}
