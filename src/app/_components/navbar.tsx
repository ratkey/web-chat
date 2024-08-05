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

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              priority
              src={"/web-chat-logo/svg/logo.svg"}
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
                    <Avatar
                      size={"sm"}
                      src={session?.user?.image ?? undefined}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={session?.user?.image ?? undefined}
                      />
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
    </>
  );
}
