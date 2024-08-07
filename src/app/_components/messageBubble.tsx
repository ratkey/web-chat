import { Avatar, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";

interface Props {
  message: string;
  image?: string | null;
  reverse?: boolean | null;
}

export default function MessageBubble(props: Props) {
  const { message, image, reverse } = props;
  return (
    <>
      <Stack direction={reverse ? ["row-reverse"] : ["row"]} align={"center"}>
        <Tag size="lg" colorScheme="red" borderRadius="full">
          <Stack direction={reverse ? ["row-reverse"] : ["row"]} align={"end"}>
            <Avatar
              src={image ?? undefined}
              size="xs"
              name="Segun Adebayo"
              className={`${reverse ? "-mr-1 ml-2" : "-ml-1 mr-2"}`}
            />
            <TagLabel>{message}</TagLabel>
          </Stack>
        </Tag>
      </Stack>
    </>
  );
}
