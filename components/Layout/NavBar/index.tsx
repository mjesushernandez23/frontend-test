//libraries
import { useState } from "react";
import Link from "next/link";
//components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InfoHelpIcon from "@icons/InfoHelpIcon";
import Divider from "@mui/material/Divider";
//icons
import MenuIcon from "@mui/icons-material/Menu";
import Links from "./Links";
//styles
import styles from "./NavBar.module.css";

const navLinks = [
  { path: "/calculadora", label: "Calculadora" },
  {
    path: "/privacy-notice",
    label: "Aviso de privacidad",
    icon: <InfoHelpIcon className="w-full h-full" />,
  },
];

interface NavBarProps {
  window?: () => Window;
}
const NavBar = (props: NavBarProps) => {
  const { window } = props;
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setShowSideBar(prev => !prev);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" className="bg-white shadow-appBar">
        <Toolbar className="px-0 min-h-auto">
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="text-black"
          >
            <MenuIcon />
          </IconButton>
          <div
            className={`flex flex-wrap justify-between items-center ${styles.cont_navbar_desktop}`}
          >
            <div
              className={`flex flex-wrap justify-between items-center  ${styles.cont_brand_desktop}`}
            >
              <Link href={"/"}>
                <div
                  style={{ backgroundImage: "url(/icons/brand.png)" }}
                  className={`background-png ${styles.icon_brand}`}
                />
              </Link>
              <div className={`bg-gray-600 block ${styles.divider_horizontal}`} />
              <Link href={"/"}>
                <div
                  style={{ backgroundImage: "url(/icons/logo.png)" }}
                  className={`background-png ${styles.icon_logo}`}
                />
              </Link>
            </div>
            <Box sx={{ display: { xs: "none", sm: "flex" } }} className="gap-45">
              <Links navLinks={navLinks} />
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav" className="lg:hidden">
        <Drawer
          container={container}
          variant="temporary"
          open={showSideBar}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          <Links onMobile={handleDrawerToggle} navLinks={navLinks} />
        </Drawer>
        <Box component="main">
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
