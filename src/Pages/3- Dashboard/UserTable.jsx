import React, { useEffect, useContext, useState } from "react";
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
import authContext from "../../context/authContext";
import { getDoc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

// !Styles
const contentStyle = {
  textAlign: "center",
  fontFamily: "cursive",
  marginTop: "2rem",
  color: "red",
  fontSize: "1.3rem",
};

const UserTable = () => {
  const ctx = useContext(authContext);
  let Content = (
    <p style={contentStyle}>Nothing Found Enter some data or try again!! 🙂</p>
  );

  const loadingText = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
        height: "20vh",
      }}
    >
      <CircularProgress />
    </Box>
  );

  const [dataState, setDataState] = useState("");
  const [fallBackText, setFallbackText] = useState(loadingText);

  const dataGettingFunction = async () => {
    try {
      const docSnap = await getDoc(ctx.document);

      if (docSnap.exists()) {
        if (docSnap.data().arrayField.length == 0) {
          setFallbackText(Content);
        } else {
          setFallbackText("");
        }

        const FilteredArray = docSnap.data().arrayField.filter((e) => {
          if (ctx.filterBy === "Name") {
            return e.name.includes(ctx.filterInputState);
          } else if (ctx.filterBy === "Email") {
            return e.email.includes(ctx.filterInputState);
          } else {
            return e.id.includes(ctx.filterInputState);
          }
        });

        setDataState(
          <TableBody>
            {FilteredArray.map((data, i) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.id}
                </TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.sallary}</TableCell>
                <TableCell>{data.date}</TableCell>
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
        );
      } else {
        setFallbackText(Content);
      }
    } catch (error) {
      return toast.error(error.message + "Check your Network and Try Again");
    }
  };

  useEffect(() => {
    dataGettingFunction();
  }, [ctx.document]);

  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Unique ID.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Sallary($)</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {dataState}
        </Table>
        {fallBackText}
      </TableContainer>
    </Container>
  );
};

export default UserTable;
