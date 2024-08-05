"use client";
import Navbar from "./_components/navbar";
import Image from "next/image";

import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home() {
  function handleClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#171923] to-[#54266c] text-white">
        <Image
          priority
          src="/web-chat-logo/svg/logo-no-background.svg"
          width={100}
          height={100}
          alt="Icon"
          className="hidden w-[10rem] sm:inline-block sm:w-[20rem]"
        />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <InputGroup size="md">
                <Input pr="4.5rem" type="text" placeholder="Hello Web..." />
                <InputRightElement>
                  <IconButton
                    h="1.75rem"
                    size="sm"
                    aria-label="sendIcon"
                    icon={<ArrowForwardIcon />}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
