import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Container } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("123123", "Hassan", "hs9018878@gmail.com", 200, "2002 - 12 - 1"),
  createData("23423", "Faizan", "fsdaf@gmail.com", 234, "2002 - 12 - 1"),
  createData("4353", "bia", "sadlfj@gmai.com", 234, "2002 - 12 - 1"),
  createData("23423423", "alii", "asdfho@gmail.com", 234, "2002 - 12 - 1"),
  createData("345435", "anyone", "rhgoid@gmail.com", 2323, "2002 - 12 - 1"),
];

const UserTable = () => {
  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Unique ID.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Sallary($)</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                  <ButtonGroup variant="contained">
                    <Button sx={{ background: "green" }}>
                      <EditIcon />
                    </Button>
                    <Button sx={{ background: "red" }}>
                      <DeleteForeverIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserTable;
