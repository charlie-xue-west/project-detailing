import { Box, Image } from "@chakra-ui/react";
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
      <Image asChild alt="Anime Cobra Terminator" width={"100%"}>
        <NextImage
          src={AnimeCobra}
          alt="Anime Cobra Terminator"
          width={480}
          height={320}
        />
      </Image>
      <Image asChild alt="Anime Cobra Terminator With Foam" width={"100%"}>
        <NextImage
          src={AnimeCobraFoam}
          alt="Anime Cobra Terminator With Foam"
          width={480}
          height={320}
        />
      </Image>
      <Image asChild alt="Anime Cobra Mobile" width={"100%"}>
        <NextImage
          src={AnimeCobraEngineMobile}
          alt="Anime Cobra Mobile"
          width={480}
          height={320}
        />
      </Image>
    </Box>
  );
}
