import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLinksProps } from "@interfaces/uiProps";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";

interface LinksProps {
  onMobile?: () => void;
  navLinks: NavLinksProps[];
}
const Links = ({ onMobile, navLinks }: LinksProps) => {
  return onMobile ? (
    <List>
      {navLinks.map(({ label, path, icon }, index) => (
        <ListItem key={`link-mobile-${index}`} disablePadding>
          <Link href={path}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText className="font-bold" primary={label} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  ) : (
    <>
      {navLinks.map(({ label, path, icon }, index) => (
        <Link href={path} key={`link-desktop-${index}`}>
          <Button
            startIcon={icon}
            classes={{ startIcon: "w-19 h-19 mr-5" }}
            LinkComponent="a"
            className="text-blue-250 capitalize text-16 font-bold p-0"
          >
            {label}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default Links;
