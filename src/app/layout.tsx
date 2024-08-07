import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import { TRPCReactProvider } from "~/trpc/react";
import SessionProvider from "./SessionProvider";

export const metadata: Metadata = {
  title: "WC",
  description: "Web Chat",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ColorModeScript initialColorMode={"dark"} />
        <TRPCReactProvider>
          <ChakraProvider>
            <SessionProvider>{children}</SessionProvider>
          </ChakraProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
