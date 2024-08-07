"use client";
import Navbar from "./_components/navbar";
import Image from "next/image";
import ChatRegistry from "./_components/chatRegistry";
import GlobalInput from "./_components/globalnput";
import { Center, Container, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#171923] to-[#54266c] text-white">
        <Container>
          <div className="mt-8 flex flex-col sm:mt-0">
            <div className="hidden sm:inline-block">
              <Center>
                <VStack>
                  <Image
                    priority
                    src="/web-chat-logo/svg/logo.svg"
                    width={70}
                    height={70}
                    alt="Icon"
                  />
                  <Text fontSize="2xl" as="b">
                    Web Chat
                  </Text>
                </VStack>
              </Center>
            </div>
            <div className="flex flex-col gap-4 sm:flex-col-reverse">
              <ChatRegistry className="flex w-full flex-col-reverse sm:flex-col" />
              <GlobalInput />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
