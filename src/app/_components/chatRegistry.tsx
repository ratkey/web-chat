/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  Box,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  Tag,
  TagLabel,
  Avatar,
} from "@chakra-ui/react";
import { type PostWithUser, useGetChatData } from "~/hooks/useChat";
import MessageBubble from "./messageBubble";
import { useSession } from "next-auth/react";

export default function ChatRegistry({ className }: { className: string }) {
  const { data: session } = useSession();
  const { data, error, isLoading } = useGetChatData();

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Error loading chat data: {error.message}
      </Alert>
    );
  }

  return (
    <Box className={className}>
      {data && data.length > 0 ? (
        data.map((post: PostWithUser) => (
          <Box key={post.id} className="mb-2">
            <MessageBubble
              own={post.createdById === session?.user.id}
              image={post.createdBy.image}
              message={post.name}
            />
          </Box>
        ))
      ) : (
        <Text>No chat messages available</Text>
      )}
    </Box>
  );
}
