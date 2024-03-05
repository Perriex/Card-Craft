import { Controller } from "react-hook-form";

import {
  Button,
  Container,
  FormHelperText,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

import { cardKeys } from "@CardCraft/types/card";
import useCard from "@CardCraft/pages/api/Card";

import { FormItems } from "./form";

export default function CardPage() {
  const { id, errors, control, loading, handleSubmit, onSubmit } = useCard();

  return (
    <Container sx={{ display: "grid", placeItems: "center" }}>
      <Paper sx={{ width: "430px", p: "18px 35px" }}>
        <form
          onSubmit={handleSubmit((data) => onSubmit({ ...data, status: true }))}
        >
          <Grid container alignItems={"center"} gap={"18px"}>
            <Grid container>
              <Typography>
                {id ? "Edit Card #" + id : "Add New Card"}
              </Typography>
            </Grid>
            {FormItems.map((row) => (
              <Grid container gap={"10px"} alignItems={"center"}>
                <Grid item sx={{ minWidth: "70px" }}>
                  <Typography fontSize={12}>{row.label}</Typography>
                </Grid>
                {row.inputs.map(
                  (item: {
                    name: cardKeys;
                    width: string;
                    placeHolder: string;
                  }) => (
                    <Grid item key={item.name} sx={{ position: "relative" }}>
                      <Controller
                        name={item.name}
                        control={control}
                        render={({ field }) => (
                          <Paper sx={{ width: item.width }}>
                            <InputBase
                              {...field}
                              placeholder={item.placeHolder}
                            />
                          </Paper>
                        )}
                      />
                      <FormHelperText
                        error
                        sx={{
                          position: "absolute",
                          top: "30px",
                          fontSize: "0.65rem",
                          width: "max-content",
                        }}
                      >
                        {item.name !== "expireYear" &&
                        item.name !== "expireMonth" ? (
                          errors[item.name]?.message
                        ) : (
                          <></>
                        )}
                        {(errors["expireYear"] || errors["expireMonth"]) &&
                        ["expireYear", "expireMonth"].includes(item.name) ? (
                          <>Required</>
                        ) : (
                          <></>
                        )}
                      </FormHelperText>
                    </Grid>
                  )
                )}
              </Grid>
            ))}

            <Grid item container gap={"30px"}>
              <Grid item>
                <Button
                  disabled={loading}
                  variant="outlined"
                  color="error"
                  onClick={handleSubmit((data) =>
                    onSubmit({ ...data, status: false })
                  )}
                  sx={{ width: "200px" }}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={loading}
                  variant="contained"
                  type="submit"
                  sx={{ width: "200px" }}
                >
                  Save and Activate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
