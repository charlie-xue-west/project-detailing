import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import {
  AnimeCobra,
  AnimeCobraEngineMobile,
  AnimeCobraFoam,
} from "@/assets/home";

export default function Home() {
  return (
    <Box
      as={"section"}
      justifyContent={"center"}
      textAlign={"center"}
      bg={"black"}
      height={"100%"}
    >
      <Box position={"relative"}>
        <Flex
          position={"absolute"}
          top={"25%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          <Heading
            as={"h2"}
            size={{
              base: "lg",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            color={"#ededed"}
          >
            Take your car detailing to the next stage
          </Heading>
        </Flex>

        <Image asChild alt="Anime Cobra Terminator" width={"100%"}>
          <NextImage
            src={AnimeCobra}
            alt="Anime Cobra Terminator"
            width={480}
            height={320}
          />
        </Image>
      </Box>
      <Box position={"relative"}>
        <Flex
          position={"absolute"}
          top={"25%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          <Heading
            as={"h2"}
            size={{
              base: "lg",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            color={"#ededed"}
          >
            Give it the love it deserves inside out.
          </Heading>
        </Flex>
        <Image asChild alt="Anime Cobra Terminator With Foam" width={"100%"}>
          <NextImage
            src={AnimeCobraFoam}
            alt="Anime Cobra Terminator With Foam"
            width={480}
            height={320}
          />
        </Image>
      </Box>
      <Box position={"relative"}>
        <Flex
          position={"absolute"}
          top={"35%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
        >
          <Heading
            as={"h2"}
            size={{
              base: "lg",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            color={"#ededed"}
          >
            Because we don&apos;t miss a single corner.
          </Heading>
        </Flex>
        <Image asChild alt="Anime Cobra Mobile" width={"100%"}>
          <NextImage
            src={AnimeCobraEngineMobile}
            alt="Anime Cobra Mobile"
            width={480}
            height={320}
          />
        </Image>
      </Box>
    </Box>
  );
}
