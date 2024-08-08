import { Avatar, Box, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";

interface Props {
  message: string;
  image?: string | null;
  own?: boolean | null;
}

export default function MessageBubble(props: Props) {
  const { message, image, own } = props;
  return (
    <>
      <div className={`flex gap-2 ${own && "flex-row-reverse"}`}>
        <Avatar
          alignSelf={"start"}
          src={image ?? undefined}
          size="xs"
          name="Segun Adebayo"
        />
        <div
          className={`${own ? "rounded-b-xl rounded-s-xl" : "rounded-b-xl rounded-e-xl"} bg-teal-800 p-2`}
        >
          <Text>{message}</Text>
        </div>
      </div>
    </>
  );
}
