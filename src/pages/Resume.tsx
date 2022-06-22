import { useRef } from "react";
import ResumeLeft from "components/ResumeLeft";
import { useReactToPrint } from "react-to-print";
import ResumeRight from "components/ResumeRight";
import styles from "assets/css/common.module.css";
import { Box, Container, Grid } from "@chakra-ui/react";

export default function Resume() {
  const pdfRef = useRef<HTMLDivElement>(null);
  const handlePdfDownload = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "Emigdio-Torres",
  });

  return (
    <Container maxW="4xl" px={{ base: 0, md: 0 }} pt={20}>
      <Box ref={pdfRef}>
        <Grid
          borderRadius="xl"
          overflow="hidden"
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
