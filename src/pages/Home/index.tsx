import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";

import SearchIcon from "@CardCraft/assets/svg/Search.svg";

import CardTable from "@CardCraft/components/Table";

import useHome from "@CardCraft/pages/api/Home";

export default function HomePage() {
  const { term, data, deleteCard, setTerm } = useHome();

  return (
    <Container sx={{ p: 0, px: { sm: "0" } }}>
      <Grid container gap={"12px"}>
        <Grid item container justifyContent={"flex-end"} gap={"14px"}>
          <Grid item>
            <Paper component="form" sx={{ width: "270px" }}>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search cards" }}
                sx={{ width: "225px" }}
                value={term}
                onChange={(e) => setTerm(e.target.value.replace("\\", ""))} // regex call
              />
              <IconButton type="button" aria-label="search">
                <img src={SearchIcon} alt="Search Icon" />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to="/add"
              variant="contained"
              color="primary"
            >
              Add Card
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <CardTable rows={data} deleteRow={deleteCard} />
        </Grid>
      </Grid>
    </Container>
  );
}
