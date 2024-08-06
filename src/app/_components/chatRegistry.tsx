/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Box, Text, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { type PostWithUser, useGetChatData } from "~/hooks/useChat";
import MessageBubble from "./messageBubble";

export default function ChatRegistry() {
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
    <Box className="w-full">
      {data && data.length > 0 ? (
        data.map((post: PostWithUser) => (
          <Box key={post.id} className="mb-2">
            <MessageBubble image={post.createdBy.image} message={post.name} />
          </Box>
        ))
      ) : (
        <Text>No chat messages available</Text>
      )}
    </Box>
  );
}
