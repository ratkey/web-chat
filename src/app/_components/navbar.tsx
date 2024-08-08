"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";

export default function Navbar() {
  const { data: session } = useSession();

  const avatar = createAvatar(funEmoji, {
    seed: session?.user.id,
    flip: true,
  });

  const userImage = avatar.toDataUri();

  return (
    <div className="w-full">
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              priority
              src={userImage}
              alt="Icon"
              width={100}
              height={100}
              className="mr-1 inline-block w-9 p-1 sm:hidden"
            />
            <Text className="inline w-9 font-bold sm:hidden">Web Chat</Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} alignItems="center" spacing={7}>
              <Text>{session?.user?.name}</Text>
              {session ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={userImage} />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar size={"2xl"} src={userImage} />
                    </Center>
                    <br />
                    <Center>
                      <p>{session?.user?.name}</p>
                    </Center>
                    <MenuDivider />
                    <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button onClick={() => signIn()} colorScheme="purple">
                  Login
                </Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
