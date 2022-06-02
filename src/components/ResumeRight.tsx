import {
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaDrum,
  FaHtml5,
  FaReact,
  FaSteam,
  FaLaptop,
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaKeyboard,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { SemiBoldText } from "./SemiBoldText";
import { TextColorModeVal } from "utils/ColorModeVal";
import { SectionTitle } from "./SectionTitle";
import styles from "assets/css/common.module.css";

export const ResumeRight = () => {
  return (
    <>
      <Box p={4} bg={useColorModeValue("#fafafa", "#212121")}>
        <Box mb={6}>
          <SectionTitle>Experience</SectionTitle>
          <Flex mb={3}>
            <Box pr={4}>
              <Box
                w={3}
                h={3}
                mt={1}
                bg={TextColorModeVal()}
                borderRadius="full"
              />
              <Box
                w={"2px"}
                h={"100%"}
                opacity={0.6}
                bg={TextColorModeVal()}
                transform="translate(5px, 0)"
              />
            </Box>
            <Box color={TextColorModeVal()} textAlign="left">
              <Heading as="h5" size={"sm"} fontWeight={600}>
                Web Developer
              </Heading>
              <Text fontSize="sm">
                2014 - 2017 |{" "}
                <SemiBoldText>TATA Consultancy Services</SemiBoldText>
              </Text>
              <Text fontSize="sm">
                Frontend work, using JavaScript under a framework called: ExtJS.
                Development of banking web apps for Morgan Stanley bank.
              </Text>
            </Box>
          </Flex>
          <Flex mb={3}>
            <Box pr={4}>
              <Box
                w={3}
                h={3}
                mt={1}
                bg={TextColorModeVal()}
                borderRadius="full"
              />
              <Box
                w={"2px"}
                h={"100%"}
                opacity={0.6}
                bg={TextColorModeVal()}
                transform="translate(5px, 0)"
              />
            </Box>
            <Box color={TextColorModeVal()} textAlign="left">
              <Heading as="h5" size={"sm"} fontWeight={600}>
                Software Engineer
              </Heading>
              <Text fontSize="sm">
                2017 - 2019 |{" "}
                <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>
              </Text>
              <Text fontSize="sm">
                Frontend work, using SASS, JQuery, Bootstrap. Sometimes worked
                on Backend, using Ruby on Rails. Development of Payments portal
                for an education platform.
              </Text>
            </Box>
          </Flex>
          <Flex mb={3}>
            <Box pr={4}>
              <Box
                w={3}
                h={3}
                mt={1}
                bg={TextColorModeVal()}
                borderRadius="full"
              />
              <Box
                w={"2px"}
                h={"100%"}
                opacity={0.6}
                bg={TextColorModeVal()}
                transform="translate(5px, 0)"
              />
            </Box>
            <Box color={TextColorModeVal()} textAlign="left">
              <Heading as="h5" size={"sm"} fontWeight={600}>
                Software Engineer
              </Heading>
              <Text fontSize="sm">
                2019- 2021 | <SemiBoldText>HCL Technologies</SemiBoldText>
              </Text>
              <Text fontSize="sm">
                Frontend work, using IBM JS Dojo toolkit, migrating to ReactJS,
                Redux and MaterialUI. Development of an application builder.
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box pr={4}>
              <Box
                w={3}
                h={3}
                mt={1}
                bg={TextColorModeVal()}
                borderRadius="full"
              />
            </Box>
            <Box color={TextColorModeVal()} textAlign="left">
              <Heading as="h5" size={"sm"} fontWeight={600}>
                Software Engineer
              </Heading>
              <Text fontSize="sm">
                Present | <SemiBoldText>Wizeline</SemiBoldText>
              </Text>
              <Text fontSize="sm">Currently working with React.</Text>
            </Box>
          </Flex>
        </Box>
        <Box mb={6}>
          <SectionTitle>Skills</SectionTitle>
          <Grid
            columnGap={6}
            textAlign="center"
            color={TextColorModeVal()}
            className={styles["skills-grid"]}
            templateColumns="repeat(6, max-content)"
          >
            <Box>
              <Icon as={FaCss3Alt} fontSize="2xl" />
              <Text fontSize="sm">CSS</Text>
            </Box>
            <Box>
              <Icon as={FaHtml5} fontSize="2xl" />
              <Text fontSize="sm">HTML</Text>
            </Box>
            <Box>
              <Icon as={FaJsSquare} fontSize="2xl" />
              <Text fontSize="sm">JS</Text>
            </Box>
            <Box>
              <Icon as={FaGitAlt} fontSize="2xl" />
              <Text fontSize="sm">Git</Text>
            </Box>
            <Box>
              <Icon as={FaReact} fontSize="2xl" />
              <Text fontSize="sm">React</Text>
            </Box>
            <Box>
              <Icon as={FaNodeJs} fontSize="2xl" />
              <Text fontSize="sm">Node</Text>
            </Box>
          </Grid>
        </Box>
        <Box mb={6}>
          <SectionTitle>Hobbies & Interests</SectionTitle>
          <Grid
            columnGap={6}
            textAlign="center"
            color={TextColorModeVal()}
            className={styles["hobbies-grid"]}
            templateColumns="repeat(5, max-content)"
          >
            <Box>
              <Icon as={FaDrum} fontSize="2xl" />
              <Text fontSize="sm">Drums</Text>
            </Box>
            <Box>
              <Icon as={FaHeadphonesAlt} fontSize="2xl" />
              <Text fontSize="sm">Music</Text>
            </Box>
            <Box>
              <Icon as={FaSteam} fontSize="2xl" />
              <Text fontSize="sm">Games</Text>
            </Box>
            <Box>
              <Icon as={FaLaptop} fontSize="2xl" />
              <Text fontSize="sm">Tech</Text>
            </Box>
            <Box>
              <Icon as={FaKeyboard} fontSize="2xl" />
              <Text fontSize="sm">KBoards</Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
