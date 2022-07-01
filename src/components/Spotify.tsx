import { BiMusic } from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import useNowPlaying from "hooks/useNowPlaying";
import { Flex, Text, Image, VStack } from "@chakra-ui/react";
import MotionDiv from "./MotionDiv";
// import useRecentlyPlayed from "hooks/useRecentlyPlayed";

export default function Spotify() {
  const nowPlaying = useNowPlaying();
  // const recentlyPlayed = useRecentlyPlayed();
  const { song, error } = nowPlaying;

  // if (!currSong) currSong = recentlyPlayed.song;
  // if (!error) error = recentlyPlayed.error;

  return (
    <>
      <Flex borderRadius="full" bg="dark" alignItems="center" direction="row">
        <Image
          mr={2}
          alt="Album"
          boxSize={20}
          boxShadow="2xl"
          objectFit="cover"
          borderRadius="md"
          src={song?.album.images[0].url}
          fallback={
            <VStack
              w={20}
              mr={2}
              h={20}
              bg="#333"
              justify="center"
              borderRadius="md"
            >
              <BiMusic color="white" size={18} />
            </VStack>
          }
        />
        <Flex
          px={2}
          borderRadius="md"
          direction="column"
          alignItems="flex-start"
        >
          <FaSpotify size={20} style={{ height: "24px" }} />
          {song ? (
            <MotionDiv y={5}>
              <Text fontWeight={600} noOfLines={2}>
                {song.name}
              </Text>
              <Text>{song.artists[0]?.name}</Text>
            </MotionDiv>
          ) : (
            <>
              <Text fontWeight={600} noOfLines={1}>
                No song playing
              </Text>
              <Text>Spotify</Text>
            </>
          )}
        </Flex>
      </Flex>
      {error && (
        <Text fontSize="xs" mt={2}>
          {error}
        </Text>
      )}
    </>
  );
}
