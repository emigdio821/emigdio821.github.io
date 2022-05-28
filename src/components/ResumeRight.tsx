import { Box, Heading, useColorModeValue, Text } from "@chakra-ui/react";
import {
  FaCss3Alt,
  FaDrum,
  FaGitAlt,
  FaHeadphonesAlt,
  FaHtml5,
  FaJsSquare,
  FaKeyboard,
  FaLanguage,
  FaLaptop,
  FaNodeJs,
  FaReact,
  FaSteam,
} from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";
import { SemiBoldText } from "./SemiBoldText";
import "../pages/Resume/styles.css";

export const ResumeRight = () => {
  const textColorMode = useColorModeValue("#333", "#f0efef");
  return (
    <>
      <Box
        p={4}
        bg={useColorModeValue("#fafafa", "#212121")}
      >
        <MotionDiv delay={0.1}>
          <Box
            mb={6}
            className="common-box"
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Experience
            </Heading>
            <Box className="experience__content" mb={6}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"120%"}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Web Developer
                </Heading>
                <Text fontSize="sm">
                  2014 - 2017 |{" "}
                  <SemiBoldText>TATA Consultancy Services</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using JavaScript under a framework called:
                  ExtJS. Development of banking web apps for Morgan Stanley
                  bank.
                </Text>
              </Box>
            </Box>
            <Box className="experience__content" mb={6}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"120%"}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  2017 - 2019 |{" "}
                  <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using SASS, JQuery, Bootstrap. Sometimes worked
                  on Backend, using Ruby on Rails. Development of Payments
                  portal for an education platform.
                </Text>
              </Box>
            </Box>

            <Box className="experience__content" mb={6}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"120%"}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  2019- 2021 | <SemiBoldText>HCL Technologies</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using IBM JS Dojo toolkit, migrating to
                  ReactJS, Redux and MaterialUI. Development of an application
                  builder.
                </Text>
              </Box>
            </Box>
            <Box className="experience__content" mb={6}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  Present | <SemiBoldText>Wizeline</SemiBoldText>
                </Text>
                <Text fontSize="sm">Currently working with React.</Text>
              </Box>
            </Box>
          </Box>
        </MotionDiv>

        <MotionDiv delay={0.2}>
          <Box
            mb={6}
            className="common-box"
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Languages
            </Heading>
            <Box className="languages__container bd-grid" color={textColorMode}>
              <Box className="languages__content">
                <FaLanguage className="languages__icon" />
                <Text fontSize="sm">Spanish</Text>
              </Box>
              <Box className="languages__content">
                <FaLanguage className="languages__icon" />
                <Text fontSize="sm">English</Text>
              </Box>
            </Box>
          </Box>
        </MotionDiv>

        <MotionDiv delay={0.3}>
          <Box
            mb={6}
            className="common-box"
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Skills
            </Heading>
            <Box className="skills__container bd-grid" color={textColorMode}>
              <Box className="skills__content">
                <FaCss3Alt className="skills__icon" />
                <Text fontSize="sm">CSS</Text>
              </Box>
              <Box className="skills__content">
                <FaHtml5 className="skills__icon" />
                <Text fontSize="sm">HTML</Text>
              </Box>
              <Box className="skills__content">
                <FaJsSquare className="skills__icon" />
                <Text fontSize="sm">JS</Text>
              </Box>
              <Box className="skills__content">
                <FaGitAlt className="skills__icon" />
                <Text fontSize="sm">Git</Text>
              </Box>
              <Box className="skills__content">
                <FaReact className="skills__icon" />
                <Text fontSize="sm">React</Text>
              </Box>
              <Box className="skills__content">
                <FaNodeJs className="skills__icon" />
                <Text fontSize="sm">Node</Text>
              </Box>
            </Box>
          </Box>
        </MotionDiv>

        <MotionDiv delay={0.4}>
          <Box
            mb={6}
            className="common-box"
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Hobbies & Interests
            </Heading>
            <Box className="hobbies__container bd-grid" color={textColorMode}>
              <Box className="hobbies__content">
                <FaDrum className="hobbies__icon" />
                <Text fontSize="sm">Drums</Text>
              </Box>
              <Box className="hobbies__content">
                <FaHeadphonesAlt className="hobbies__icon" />
                <Text fontSize="sm">Music</Text>
              </Box>
              <Box className="hobbies__content">
                <FaSteam className="hobbies__icon" />
                <Text fontSize="sm">Games</Text>
              </Box>
              <Box className="hobbies__content">
                <FaLaptop className="hobbies__icon" />
                <Text fontSize="sm">Tech</Text>
              </Box>
              <Box className="hobbies__content">
                <FaKeyboard className="hobbies__icon" />
                <Text fontSize="sm">KBoards</Text>
              </Box>
            </Box>
          </Box>
        </MotionDiv>
      </Box>
    </>
  );
};
