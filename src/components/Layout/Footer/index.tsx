import theme from "@CardCraft/style/theme";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography variant="subtitle1" color={theme.figmaPalette.footer}>
      Copyright 2024, Morriex!
    </Typography>
  );
}
