import {
  Box,
  Text,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaAt,
  FaPhone,
  FaFilePdf,
  FaGithubAlt,
  FaLinkedinIn,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { BtnLink } from "./BtnLink";
import { EmAvatar } from "./EmAvatar";
import { MotionDiv } from "./MotionDiv";
import { SemiBoldText } from "./SemiBoldText";
import styles from "assets/css/common.module.css";

interface ResumeLeftProps {
  pdfCallback: () => void;
}

export const ResumeLeft = ({ pdfCallback }: ResumeLeftProps) => {
  const textColorMode = useColorModeValue("#333", "#f0efef");
  return (
    <>
      <Box p={4} bg={useColorModeValue("#f0efef", "#181616")}>
        <Box mb={6}>
          <MotionDiv delay={0.1}>
            <EmAvatar />
            <Box flexGrow={1} mb={6} mt={4} >
              <Heading as="h3" size={"lg"} color={textColorMode}>
                Emigdio Torres
              </Heading>
              <Text fontSize="lg" color={textColorMode}>
                Software Engineer
              </Text>
            </Box>
            <Button
              as="a"
              mb={6}
              variant="outline"
              leftIcon={<FaFilePdf />}
              className={styles["download-pdf-btn"]}
              onClick={pdfCallback}
            >
              Download
            </Button>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <Box>
              <Box>
                <BtnLink
                  variant="link"
                  text="+52 (313) 961-7676"
                  Icon={FaPhone}
                  size="sm"
                  href="tel:+523139617676"
                />
              </Box>
              <Box>
                <BtnLink
                  variant="link"
                  text="emigdio821@gmail.com"
                  Icon={FaAt}
                  href="mailto:emigdio821@gmail.com"
                />
              </Box>
              <Box>
                <BtnLink
                  variant="link"
                  text="Jalisco, Mexico"
                  Icon={FaMapMarkedAlt}
                  href="https://www.google.com.mx/maps/place/Jalisco"
                />
              </Box>
              <Box>
                <BtnLink
                  variant="link"
                  text="@emigdio821"
                  Icon={FaLinkedinIn}
                  href="https://www.linkedin.com/in/emigdio821/"
                />
              </Box>
              <Box>
                <BtnLink
                  variant="link"
                  text="@emigdio821"
                  Icon={FaGithubAlt}
                  href="https://github.com/emigdio821/"
                />
              </Box>
            </Box>
          </MotionDiv>
        </Box>
        <MotionDiv delay={0.3}>
          <Box mb={6} className={styles["common-box"]}>
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Profile
            </Heading>
            <Box color={textColorMode}>
              <Text mb={4} fontSize="sm">
                <SemiBoldText>Telematics Engineer</SemiBoldText> with experience
                in Software Engineering using current programming standards.
              </Text>
              <Text fontSize="sm">
                Currently I am a Software Engineer at{" "}
                <SemiBoldText>Wizeline</SemiBoldText>. I have no problem to
                adapt in new environments and technologies.
              </Text>
            </Box>
          </Box>
        </MotionDiv>
        <MotionDiv delay={0.4}>
          <Box>
            <Heading
              as="h4"
              size={"md"}
              mb={4}
              letterSpacing={3}
              color={textColorMode}
            >
              Education
            </Heading>
            <Heading as="h5" size={"sm"} fontWeight={600} color={textColorMode}>
              Telematics Engineer
            </Heading>
            <Box color={textColorMode}>
              <Text fontSize="sm">Engineer&lsquo;s Degree</Text>
              <Text fontSize="sm">University of Colima</Text>
              <Text fontSize="sm">2010 - 2014</Text>
            </Box>
          </Box>
        </MotionDiv>
      </Box>
    </>
  );
};
