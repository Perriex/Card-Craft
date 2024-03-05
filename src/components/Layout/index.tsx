import { ReactNode } from "react";

import { Container } from "@mui/material";

import Sidebar from "./Sidebar";
import Brand from "./Brand";
import Footer from "./Footer";

import { LayoutStyles } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Sidebar />
      <Container sx={LayoutStyles.container}>
        <Container maxWidth="lg" sx={LayoutStyles.children}>
          <Brand />
          <div style={LayoutStyles.children}>{props.children}</div>
        </Container>
        <Footer />
      </Container>
    </>
  );
}
