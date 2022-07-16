import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "./NavBar";

interface indexProps {
  children: JSX.Element;
}
const index = (props: indexProps) => {
  const { children } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Box component="main">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default index;
