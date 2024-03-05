import { Container, Grid, Typography } from "@mui/material";

import Logo from "@CardCraft/assets/logo.svg";

import theme from "@CardCraft/style/theme";

export default function Brand() {
  return (
    <Container>
      <Grid container alignItems={"center"} gap={"16px"}>
        <Grid item>
          <img src={Logo} alt="Card Craft Logo" height={"100px"} />
        </Grid>
        <Grid item>
          <Grid>
            <Typography variant="h5">
              Card Craft
            </Typography>
          </Grid>
          <Grid>
            <Typography color={theme.figmaPalette.primary}>
              Efficient Card Management Application
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
