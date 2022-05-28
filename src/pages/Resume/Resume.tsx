import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import {
  FaAt,
  FaFilePdf,
  FaGithubAlt,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import ProfileImg from "../../assets/images/_doge.png";
import { BtnLink } from "../../components/BtnLink";
import { MotionDiv } from "../../components/MotionDiv";
import { ResumeRight } from "../../components/ResumeRight";
import { SemiBoldText } from "../../components/SemiBoldText";
import "./styles.css";

export const Resume = () => {
  const pdfRef = useRef(null);
  const textColorMode = useColorModeValue("#333", "#f0efef");
  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Emigdio-Torres",
  });
  return (
    <>
      <Container py={4} px={0} pt={20} maxW="4xl" minH="calc(100vh - 120px)">
        <MotionDiv>
          <Box ref={pdfRef}>
            <Grid
              className="main-grid"
              templateColumns={{ base: "inherit", md: "0.5fr 1fr" }}
            >
              <Box p={4} bg={useColorModeValue("#f0efef", "#181616")}>
                <Box textAlign="center" mb={6}>
                  <MotionDiv delay={0.1}>
                    <Avatar
                      src={ProfileImg}
                      name="Emigdio Torres"
                      mb={4}
                      size="2xl"
                    />
                    <Box flexGrow={1} textAlign="center" mb={6}>
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
                      className="download-pdf-btn"
                      onClick={handlePdfDownload}
                    >
                      Download
                    </Button>
                  </MotionDiv>
                  <MotionDiv delay={0.2}>
                    <Box
                      className="common-box"
                      textAlign={{ base: "center", md: "left" }}
                    >
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
                      Profile
                    </Heading>
                    <Box color={textColorMode}>
                      <Text mb={4} fontSize="sm">
                        <SemiBoldText>Telematics Engineer</SemiBoldText> with
                        experience in Software Engineering using current
                        programming standards.
                      </Text>
                      <Text fontSize="sm">
                        Currently I am a Software Engineer at{" "}
                        <SemiBoldText>Wizeline</SemiBoldText>. I have no problem
                        to adapt in new environments and technologies.
                      </Text>
                    </Box>
                  </Box>
                </MotionDiv>
                <MotionDiv delay={0.4}>
                  <Box
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
                      Education
                    </Heading>
                    <Heading
                      as="h5"
                      size={"sm"}
                      fontWeight={600}
                      color={textColorMode}
                    >
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
              <ResumeRight />
            </Grid>
          </Box>
        </MotionDiv>
      </Container>
    </>
  );
};
