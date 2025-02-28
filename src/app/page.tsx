"use client";
import Header from "@/components/core/Header";
import InfoOverview from "@/components/core/InfoOverview";
import TabsContent from "@/components/core/TabsContent";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Footer from "@/components/core/Footer";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <InfoOverview />
      <TabsContent />
      <Footer />
    </ThemeProvider>
  );
}
