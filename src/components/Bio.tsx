import { Box, Heading } from "@chakra-ui/react";
import { SemiBoldText } from "./SemiBoldText";

export const Bio = () => {
  const BioSection = ({ children }: any) => (
    <Box pl={"3.4rem"} style={{ textIndent: "-3.4rem" }}>
      {children}
    </Box>
  );

  const BioYear = ({ children }: any) => (
    <span style={{ marginRight: "1.1rem" }}>
      <span style={{ fontWeight: 700 }}>{children}</span>
    </span>
  );

  return (
    <>
      <Heading as="h3" size={"md"} variant="section-title">
        Bio
      </Heading>
      <BioSection>
        <BioYear>1992</BioYear>
        Born in <SemiBoldText>Colima, Mexico</SemiBoldText>.
      </BioSection>
      <BioSection>
        <BioYear>2014</BioYear>
        <SemiBoldText>Telematics Engineering</SemiBoldText> Bachelor's Degree,{" "}
        <SemiBoldText>University of Colima</SemiBoldText>.
      </BioSection>
      <BioSection>
        <BioYear>2017</BioYear>
        Worked at <SemiBoldText>TATA Consultancy Services</SemiBoldText>.
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        Worked at <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>.
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Worked at <SemiBoldText>HCL Technologies</SemiBoldText>.
      </BioSection>
      <BioSection>
        <BioYear>Present</BioYear>
        Working at <SemiBoldText>Wizeline</SemiBoldText>.
      </BioSection>
    </>
  );
};
