import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import { MainHeader } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Detailing",
  description: "Best Car Detailing Service in the Triangle Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Box minH="100vh" display="flex" flexDirection="column">
            <MainHeader />
            <Box as="main" flex="1" w="100%" bg="#ededed">
              <Container
                p={0}
                maxW={"vw"}
                height={"auto"}
                gap={1}
                display={"flex"}
                flexDir={"column"}
              >
                {children}
              </Container>
            </Box>
            <footer>
              <Box bg="black" p={4}>
                project-detailing.inc © {new Date().getFullYear()}
              </Box>
            </footer>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
