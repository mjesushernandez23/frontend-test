import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface indexProps {
  children: JSX.Element;
}
const index = (props: indexProps) => {
  const { children } = props;
  return (
    <Box className="flex flex-wrap">
      <NavBar />
      <Box component="main" className="w-full h-auto">
        <Toolbar className="min-h-auto h-80" />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default index;
