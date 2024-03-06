import { Link } from "react-router-dom";

import { Container, Grid, IconButton } from "@mui/material";

import WhiteLogoIcon from "@CardCraft/assets/svg/WhiteLogo.svg";
import HomeIcon from "@CardCraft/assets/svg/Home.svg";
import AddCardIcon from "@CardCraft/assets/svg/AddCard.svg";
import InfoIcon from "@CardCraft/assets/svg/Info.svg";

import { SidebarStyles } from "./styles";

export default function Sidebar() {
  return (
    <Container sx={SidebarStyles.container}>
      <div style={SidebarStyles.content}>
        <img src={WhiteLogoIcon} alt="Logo Icon" />
        <Grid container flexDirection={"column"} gap={"50px"}>
          <Grid item>
            <Link to="/">
              <img src={HomeIcon} alt="Home Icon" />{" "}
            </Link>
          </Grid>
          <Grid item>
            <Link to="/add">
              <img src={AddCardIcon} alt="Home Icon" />{" "}
            </Link>
          </Grid>
        </Grid>
        <IconButton>
          <img src={InfoIcon} alt="Query Icon" />
        </IconButton>
      </div>
    </Container>
  );
}
