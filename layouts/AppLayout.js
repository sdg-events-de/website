import { Box, Container } from "@mui/material";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const AppLayout = ({ children, containerProps }) => (
  <Box display="flex" minHeight="100vh" flexDirection="column">
    <NavBar />
    <Box display="flex" flexDirection="column" flexGrow={1} marginY={3}>
      <Container {...containerProps}>{children}</Container>
    </Box>
    <Footer />
  </Box>
);

export default AppLayout;
