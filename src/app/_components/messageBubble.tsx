import { Avatar, Text } from "@chakra-ui/react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";

interface Props {
  message: string;
  image?: string;
  own?: boolean | null;
  userId?: string;
}

export default function MessageBubble(props: Props) {
  const { message, own, userId } = props;

  const avatar = createAvatar(funEmoji, {
    seed: userId,
    flip: !!own,
  });

  const svg = avatar.toDataUri();

  return (
    <>
      <div className={`flex gap-2 ${own && "flex-row-reverse"}`}>
        <Avatar alignSelf={"start"} src={svg} size="sm" name="Segun Adebayo" />
        <div
          className={`${own ? "rounded-b-xl rounded-s-xl" : "rounded-b-xl rounded-e-xl"} bg-teal-800 p-2`}
        >
          <Text>{message}</Text>
        </div>
      </div>
    </>
  );
}
