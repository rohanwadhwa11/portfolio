import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function NavItem() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 40,
        left: 400,
        width: "50%",
        zIndex: 999,
        backgroundColor: "#00000055",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
         sx={{
          display: "flex",
          justifyContent: "space-evenly", // spacing between items
          backgroundColor: "inherit",
          paddingTop: "1rem"
        }}
      >
         {[
          { label: "Home", icon: <HomeIcon /> },
          { label: "About", icon: <PersonIcon /> },
          { label: "Projects", icon: <CodeIcon /> },
          { label: "Experience", icon: <WorkIcon /> },
          { label: "Contact", icon: <ContactMailIcon /> },
        ].map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            sx={{
                
              color: "white",
              "&.Mui-selected": {
                color: "#00ffff", // 👈 this sets the active (selected) icon and label color
              },
              "& .MuiBottomNavigationAction-label": {
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
              },
              "&:hover .MuiBottomNavigationAction-label": {
                opacity: 1,
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
