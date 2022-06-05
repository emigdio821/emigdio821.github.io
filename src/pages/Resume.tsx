import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Box, Container, Grid } from "@chakra-ui/react";
import ResumeLeft from "components/ResumeLeft";
import ResumeRight from "components/ResumeRight";
import styles from "assets/css/common.module.css";

export default function Resume() {
  const pdfRef = useRef(null);
  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Emigdio-Torres",
  });

  return (
    <Container maxW="4xl" px={{ base: 0, md: 0 }} pt={{ base: "64px", md: 20 }}>
      <Box ref={pdfRef}>
        <Grid
          className={styles["main-grid"]}
          templateColumns={{ base: "inherit", md: "0.5fr 1fr" }}
        >
          <ResumeLeft pdfCallback={handlePdfDownload} />
          <ResumeRight />
        </Grid>
      </Box>
    </Container>
  );
}
