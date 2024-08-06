import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { usePostChatData } from "~/hooks/useChat";

export default function GlobalInput() {
  const [message, setMessage] = useState("");
  const mutation = usePostChatData();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (message !== "") {
      mutation.mutate({ name: message });
      setMessage("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="md">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          pr="4.5rem"
          type="text"
          placeholder="Hello Web..."
        />
        <InputRightElement>
          <IconButton
            h="1.75rem"
            type="submit"
            size="sm"
            aria-label="sendIcon"
            icon={<ArrowForwardIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}
