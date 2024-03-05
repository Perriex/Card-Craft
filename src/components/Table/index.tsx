import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Chip,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import { cardType } from "@CardCraft/types/card";

import EditIcon from "@CardCraft/assets/svg/Edit.svg";
import DeleteIcon from "@CardCraft/assets/svg/Delete.svg";

import theme from "@CardCraft/style/theme";

interface TableProps {
  rows: cardType[] | null;
  deleteRow: (id: number) => void;
}

const RowPerPage = 5;

export default function CardTable(props: TableProps) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [props.rows]);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper} sx={{ minWidth: 700 }}>
      <Table aria-label="card table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Account Num.</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Exp. Date</TableCell>
            <TableCell align="left">Create Date</TableCell>
            <TableCell align="left">Update Date</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows ? (
            props.rows
              .slice(page * RowPerPage, page * RowPerPage + RowPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {[row.firstNameOfHolder, row.lastNameOfHolder].join(" ")}
                  </TableCell>
                  <TableCell align="left">{row.account}</TableCell>
                  <TableCell align="left">
                    {row.status ? (
                      <Chip
                        label="active"
                        color="primary"
                        sx={{
                          backgroundColor: theme.figmaPalette.success,
                        }}
                      />
                    ) : (
                      <Chip
                        label="inactive"
                        color="primary"
                        sx={{
                          backgroundColor: theme.figmaPalette.error,
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="left">{row.expire}</TableCell>
                  <TableCell align="left">{row.createdAt}</TableCell>
                  <TableCell align="left">{row.updatedAt}</TableCell>
                  <TableCell align="left">
                    <IconButton component={Link} to={"/edit/" + row.id}>
                      <img src={EditIcon} alt="Edit Icon" />
                    </IconButton>
                  </TableCell>
                  <TableCell align="left">
                    <IconButton onClick={() => props.deleteRow(row.id)}>
                      <img src={DeleteIcon} alt="Delete Icon" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell align="left" sx={{ border: "none" }}>
                <Grid container alignItems={"center"} gap={"10px"}>
                  <CircularProgress size={16} />
                  Loading Data...
                </Grid>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={props.rows?.length ?? 0}
        rowsPerPage={RowPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </TableContainer>
  );
}
