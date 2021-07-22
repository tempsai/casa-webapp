import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Title />
      <Box margin="8" position="static">
        <Navbar />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
