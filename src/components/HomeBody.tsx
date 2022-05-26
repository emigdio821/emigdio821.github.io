import { Box, Heading, Stack } from "@chakra-ui/react";
import { MotionContainer } from "./MotionContainer";

export const HomeBody = () => {
  return (
    <MotionContainer>
      <Stack
        justify="space-between"
        // direction={{ base: "column", md: "row" }}
        align="center"
      >
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h3" size={"md"} variant="section-title">
              Profile
            </Heading>
            <p>
              Hi there!, I am a <b>Telematics Engineer</b> with experience in
              Software Engineering using current programming standards.
              Currently I am a Software Engineer at <b>Wizeline</b>. I have no
              problem to adapt in new environments and technologies.
            </p>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h3" size={"md"} variant="section-title">
              Education
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              qui illo voluptatum illum aliquam amet ea vero! Sed, blanditiis
              repellat? Possimus quia, ad modi veritatis dignissimos praesentium
              eligendi explicabo pariatur?
            </p>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h3" size={"md"} variant="section-title">
              Experience
            </Heading>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              pariatur explicabo recusandae sequi dolor autem. Autem laudantium
              hic natus magnam, sequi itaque voluptatum ullam, consequatur culpa
              deleniti suscipit asperiores saepe!
            </p>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h3" size={"md"} variant="section-title">
              I ♥
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              assumenda ullam quae numquam cupiditate? Numquam iusto quas
              repudiandae excepturi optio sunt hic ipsam perferendis. Quod velit
              consequatur quis accusamus alias.
            </p>
          </Box>
        </Box>
        <Box display={"flex"}>
          <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h3" size={"md"} variant="section-title">
              Social
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              assumenda ullam quae numquam cupiditate? Numquam iusto quas
              repudiandae excepturi optio sunt hic ipsam perferendis. Quod velit
              consequatur quis accusamus alias.
            </p>
          </Box>
        </Box>
      </Stack>
    </MotionContainer>
  );
};
