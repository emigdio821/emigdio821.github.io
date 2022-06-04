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
import { SectionTitle } from "./SectionTitle";
import { TextColorModeVal } from "utils/ColorModeVal";
import styles from "assets/css/common.module.css";

interface ResumeLeftProps {
  pdfCallback: () => void;
}

export const ResumeLeft = ({ pdfCallback }: ResumeLeftProps) => (
  <>
    <Box p={4} bg={useColorModeValue("#f0efef", "#181616")}>
      <Box mb={6}>
        <MotionDiv y={-10}>
          <EmAvatar width={120} height={120} />
        </MotionDiv>
        <Box flexGrow={1} mb={6} mt={4}>
          <Heading as="h3" size={"lg"} color={TextColorModeVal()}>
            Emigdio Torres
          </Heading>
          <Text fontSize="lg" color={TextColorModeVal()}>
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
      </Box>
      <Box mb={6} className={styles["common-box"]}>
        <SectionTitle>Profile</SectionTitle>
        <Box color={TextColorModeVal()}>
          <Text fontSize="sm">
            <SemiBoldText>Telematics Engineer</SemiBoldText> with experience in
            Software Engineering using current programming standards.
          </Text>
          <Text fontSize="sm">
            Currently I am a Software Engineer at{" "}
            <SemiBoldText>Wizeline</SemiBoldText>. I have no problem to adapt in
            new environments and technologies.
          </Text>
        </Box>
      </Box>
      <Box>
        <SectionTitle>Education</SectionTitle>
        <Heading
          as="h5"
          size={"sm"}
          fontWeight={600}
          color={TextColorModeVal()}
        >
          Telematics Engineer
        </Heading>
        <Box color={TextColorModeVal()}>
          <Text fontSize="sm">Engineer&prime;s Degree</Text>
          <Text fontSize="sm">University of Colima</Text>
          <Text fontSize="sm">2010 - 2014</Text>
        </Box>
      </Box>
    </Box>
  </>
);
